import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Pedido = db.define('pedido',{
    ped_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cli_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    prod_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    serv_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    valorPedido:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})

export default Pedido