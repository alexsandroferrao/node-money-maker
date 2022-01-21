import express from "express";
import { createDocumentRegistry } from "typescript";

const app = express();
const porta = 3000;

app.get('/', (req, res) =>{
    res.send("Boas vindas ao money maker, para buscar um recurso /moneys");
})

app.get('/moneys', (req, res) =>{

const money: Money={
    nome:"Exemplo",
    valor: 20
}    
    res.send(money);
})

if(process.env.NODE_ENV !== 'test'){
    app.listen(porta, ()=>{
        console.log('Aplicacao rodando na porta ' + porta)
    })
}

export default app

interface Money{
    nome: string,
    valor: number
}