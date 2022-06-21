import db from "./config/db.js";
import express from "express";
import cors from "cors";

const app = express();

try {
    db.authenticate().then(()=>{
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json())

app.use('/teste', (req,res) => {
    res.json("Se retornar essa msg, é pq funcionou")
})

app.listen(5000, ()=> console.log(`Servidor rodando na 5000`))