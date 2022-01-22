import { createExpressServer } from "routing-controllers";
import { MoneyController } from "./controllers/moneyController";
import 'reflect-metadata'

const porta = 3000;

export const app = createExpressServer({
    controllers:[MoneyController],
})


if(process.env.NODE_ENV !== 'test'){
    app.listen(process.env.PORT || porta, ()=>{
        console.log('Aplicacao rodando na porta ' + porta)
    })
}

