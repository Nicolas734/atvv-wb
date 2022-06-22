import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Pedido from "./pedido.js";

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

Pedido.belongsTo(Servico,{foreignKey:"serv_id"});
Servico.Pedido = Servico.hasMany(Pedido,{foreignKey:"serv_id"})

export default Servico