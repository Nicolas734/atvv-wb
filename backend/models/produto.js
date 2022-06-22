import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Pedido from "./pedido.js";

const Produto = db.define('produtos',{
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
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

Pedido.belongsTo(Produto,{foreignKey: 'prod_id'});
Produto.Pedido = Produto.hasMany(Pedido,{foreignKey:'prod_id'});

export default Produto