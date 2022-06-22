import db from "./config/db.js";
import express from "express";
import cors from "cors";
import Cliente from "./models/cliente.js";
import Pedido from "./models/pedido.js";
import Servico from "./models/servico.js";
import Produto from "./models/produto.js";
import clienteRouter from "./routes/clienteRouter.js";
import produtoRouter from "./routes/produtoRouter.js";
import servicoRouter from "./routes/servicoRouter.js";
import pedidoRouter from "./routes/pedidoRouter.js";

const app = express();

try {
    db.authenticate().then(()=>{
        Cliente.sync({force:true})
        Pedido.sync({force:true})
        Servico.sync({force:true})
        Produto.sync({force:true})
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json());

app.use('/cliente', clienteRouter);

app.use('/produto', produtoRouter);

app.use('/servico', servicoRouter);

app.use('/pedido', pedidoRouter);

app.listen(5000, ()=> console.log(`Servidor rodando na 5000`));