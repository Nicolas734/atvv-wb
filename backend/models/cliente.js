import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Cliente = db.define('cliente',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    nomeSocial:{
        type:Sequelize.STRING,
        allowNull:true
    },
    genero:{
        type:Sequelize.STRING,
        allowNull:true
    },
    cpf:{
        type:Sequelize.STRING,
        allowNull:true
    },
    rg:{
        type:Sequelize.STRING,
        allowNull:true
    },
    dataCadastro:{
        type:Sequelize.DATE,
        allowNull:true
    },
    telefone:{
        type:Sequelize.NUMBER,
        allowNull:true
    }

})

export default Cliente