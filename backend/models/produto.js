import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Produto = db.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    nomeProduto:{
        type:Sequelize.STRING,
        allowNull:true,        
    },
    
    descricaoProduto:{
        type: Sequelize.STRING,
        allowNull:true
    },

    valorProduto:{
        type: Sequelize.NUMBER,
        allowNull: true
    }
})

export default Produto