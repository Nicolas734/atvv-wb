import { Sequelize } from "sequelize"
import Cliente from "../models/cliente.js"
import Pedido from "../models/pedido.js"
import Produto from "../models/produto.js"
import Servico from "../models/servico.js"


// Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
export const listConsumByAmount = async (req,res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome', 'cpf'],
            include:{
                model:Pedido,
                attributes:['ped_id','cli_id','prod_id','serv_id']
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.serv_id) total++
                if(p.dataValues.prod_id) total++
            })
            delete c.dataValues.pedidos
            return { ...c.dataValues, total}
        }).sort((a,b)=>b.total-a.total).slice(0,10)

        res.status(201).json(clientes)

    }catch(error){
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
        res.status(201).json({message: 'Listagem de Clientes por Gênero', cliente})

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

// Listagem geral dos serviços ou produtos mais consumidos.
export const listConsumTotal = async (req,res) => {
    try{
        const dados = await Pedido.findAll({
            attributes:['ped_id','prod_id','serv_id'],
            include:[{
                model:Produto,
                attributes:['id', 'nomeProduto']
            },{
                model:Servico,
                attributes:['id','nomeServico']
            }]
        })

        const filtrado = dados.reduce((acc, cur)=>{

            if(cur.dataValues?.prod_id){
                if(acc[`produto_${cur.dataValues.prod_id}`]){
                    acc[`produto_${cur.dataValues.prod_id}`].qtd++
                }else{
                    acc[`produto_${cur.dataValues.prod_id}`] = {qtd:1, ...cur.dataValues.produto.dataValues, tipo:'Produto' }
                }
            }
                      
            if(cur.dataValues?.serv_id){
                if(acc[`servico_${cur.dataValues.serv_id}`]){
                    acc[`servico_${cur.dataValues.serv_id}`].qtd++
                }else{
                    acc[`servico_${cur.dataValues.serv_id}`] = {qtd:1, ...cur.dataValues.servico.dataValues, tipo:'Serviço'}                
                }
            }
            return acc
            
        },{})

        let ordenado = Object.keys(filtrado).map(k=>{
            return { ...filtrado[k] }
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)


        res.status(201).json(ordenado)

    }catch(error){
        res.status(500).json({message:error})
    }
}

// Listagem dos serviços ou produtos mais consumidos por gênero.
export const listMostConsumByGenero = async (req,res) =>{
    try{

        const dados = await Pedido.findAll({
            include:[{
                model:Cliente,
                attributes:['id','nome','cpf','telefone','genero']
            },{
                model:Produto,
                attributes:['id', 'nomeProduto','valorProduto']
            },{
                model:Servico,
                attributes:['id','nomeServico','valorServico']
            }]
        })

        const filtrado = dados.reduce((acc, cur)=>{

            if(cur.dataValues?.prod_id){
                if(acc[cur.dataValues.cliente.dataValues.genero][`produto_${cur.dataValues.prod_id}`]){
                    acc[cur.dataValues.cliente.dataValues.genero][`produto_${cur.dataValues.prod_id}`].qtd++
                }else{
                    acc[cur.dataValues.cliente.dataValues.genero][`produto_${cur.dataValues.prod_id}`] = {qtd:1, ...cur.dataValues.produto.dataValues, tipo:'Produto' }
                }
            }

            if(cur.dataValues?.serv_id){
                if(acc[cur.dataValues.cliente.dataValues.genero][`servico_${cur.dataValues.serv_id}`]){
                    acc[cur.dataValues.cliente.dataValues.genero][`servico_${cur.dataValues.serv_id}`].qtd++
                }else{
                    acc[cur.dataValues.cliente.dataValues.genero][`servico_${cur.dataValues.serv_id}`] = {qtd:1, ...cur.dataValues.servico.dataValues, tipo:'Serviço'}                
                }
            }
            return acc
            
        },{M:{}, F:{}, N:{}})

        let ordenadoM = Object.keys(filtrado.M).map(k=>{
            return {...filtrado.M[k]}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        let ordenadoF = Object.keys(filtrado.F).map( k => {
            return {...filtrado.F[k]}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        
        let ordenadoN = Object.keys(filtrado.N).map(k=>{
            return {...filtrado.N[k]}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        res.status(201).json({ordenadoM,ordenadoF,ordenadoN})

    }catch(error){
        res.status(500).json({ message:error })
    }
}

// Listagem dos 10 clientes que menos consumiram produtos ou serviços.
export const listLessConsum = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome', 'cpf'],
            include:{
                model:Pedido,
                attributes:['ped_id','cli_id','prod_id','serv_id']
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.serv_id) total++
                if(p.dataValues.prod_id) total++
            })
            delete c.dataValues.pedidos
            return { ...c.dataValues, total}
        }).sort((a,b)=>a.total-b.total).slice(0,10)

        res.status(201).json(clientes)


    }catch(error){
        res.status(500).json({ message:error })
    }
}

// Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
export const listMostConsumByValue = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome','nomeSocial','cpf'],
            include:{
                model:Pedido,
                attributes:['ped_id','cli_id','prod_id','serv_id'],
                include:[{
                    model:Produto,
                    attributes:['id', 'valorProduto']
                },{
                    model:Servico,
                    attributes:['id','valorServico']
                }]
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.serv_id) {
                    total +=p.dataValues.servico.valorServico
                }
                if(p.dataValues.prod_id) {
                    total +=p.dataValues.produto.valorProduto
                }
            })
            delete c.dataValues.pedidos
            return { ...c.dataValues, total}
        }).sort((a,b)=>b.total-a.total).slice(0,5)

        res.status(201).json(clientes)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}