import { useExpressServer } from "routing-controllers";
import { MoneyController } from "./controllers/moneyController";
import express from "express";
import "reflect-metadata";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes";
import * as swaggerUi from "swagger-ui-express";

const porta = 3000;
const app = express();

useExpressServer(app, {
  controllers: [MoneyController],
});

app.use(bodyParser.json());
RegisterRoutes(app);

try{
    const swaggerDocument = require('./swagger.json');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}catch(err){
    console.error('Não foi possível ler o swagger.json')
}

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || porta, () => {
    console.log("Aplicacao rodando na porta " + porta);
  });
}

export {app}