import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Servico = db.define('servicos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    nomeServico:{
        type:Sequelize.STRING,
        allowNull:true,
    },

    descricaoServico:{
        type: Sequelize.STRING,
        allowNull:true,
    },

    valorServico:{
        type: Sequelize.INTEGER,
        allowNull: true,        
    }
})

export default Servico