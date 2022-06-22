import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Cliente = db.define('clientes',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING
    },
    nomeSocial:{
        type:Sequelize.STRING
    },
    genero:{
        type:Sequelize.STRING
    },
    cpf:{
        type:Sequelize.STRING
    },
    rg:{
        type:Sequelize.STRING
    },
    dataCadastro:{
        type:Sequelize.DATE
    },
    telefone:{
        type:Sequelize.STRING
    }
})

export default Cliente