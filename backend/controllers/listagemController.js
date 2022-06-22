import { Sequelize } from "sequelize"
import Cliente from "../models/cliente.js"
import Pedido from "../models/pedido.js"
import Produto from "../models/produto.js"
import Servico from "../models/servico.js"


// Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
export const listConsumByAmount = async (req,res) => {
    try{
        const consumidoProd = await Cliente.findAll({
            group:['id'],
            attributes:['id', 'nome', 'cpf'],
            include:{
                model:Pedido,
                attributes:[
                    [Sequelize.fn('COUNT', Sequelize.col('prod_id')), "QuantidadeConsumida"]                  
                ]
            }
        })

        const consumidoServ = await Cliente.findAll({
            group:['id'],
            attributes:['id', 'nome', 'cpf'],
            include:{
                model:Pedido,
                attributes:[
                    [Sequelize.fn('COUNT', Sequelize.col('serv_id')), 'QuantidadeConsumida']                  
                ]
            }
        })

        var valorTotal = 0

        consumidoServ.forEach( a => {
            a.dataValues.pedidos.forEach( b => {
                consumidoProd.forEach( d => {
                    d.dataValues.pedidos.forEach( e => {
                        console.log(e.dataValues.QuantidadeConsumida + b.dataValues.QuantidadeConsumida)
                    })
                })
            })
        })

        res.status(201).json(consumidoServ)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

// Listagem de todos os clientes por gênero.
export const listByGenero = async (req,res) =>{
    try{
        const cliente = await Cliente.findAll({
            where:{
                genero:req.params.genero
            }
        })
        res.json({message: 'Listagem de Clientes por Gênero', cliente})

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

// Listagem geral dos serviços ou produtos mais consumidos.
export const listConsumTotal = async (req,res) => {
    try{

    }catch(error){
        res.json({message:error})
    }
}

// Listagem dos serviços ou produtos mais consumidos por gênero.
export const listMostConsumByGenero = async (req,res) =>{
    try{

    }catch(error){
        res.json({ message:error })
    }
}

// Listagem dos 10 clientes que menos consumiram produtos ou serviços.
export const listLessConsum = async (req, res) => {
    try{

    }catch(error){
        res.json({ message:error })
    }
}

// Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
export const listMostConsumByValue = async (req, res) => {
    try{

    }catch(error){
        res.json({ message:error })
    }
}