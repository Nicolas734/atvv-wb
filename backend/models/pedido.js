import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Pedido = db.define('pedido',{
    ped_id:{
        type:Sequelize.NUMBER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cli_id:{
        type:Sequelize.NUMBER,
        allowNull:false
    },
    prod_id:{
        type:Sequelize.NUMBER,
        allowNull:true
    },
    serv_id:{
        type:Sequelize.NUMBER,
        allowNull:true
    },
    valorPedido:{
        type:Sequelize.NUMBER,
        allowNull:true
    }
})

export default Pedido