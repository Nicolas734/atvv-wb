import Cliente from "../models/cliente.js";
import Pedido from "../models/pedido.js";
import Produto from "../models/produto.js";
import Servico from "../models/servico.js";
import { Op } from "sequelize";


export const criaCliente = async (req, res) => {
    try{
        const cliente = await Cliente.create({
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            genero: req.body.genero,
            cpf: req.body.cpf,
            rg: req.body.rg,
            dataCadastro: new Date().toISOString().slice(0,10),
            telefone: req.body.telefone
        })
        res.status(201).json(cliente)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaAllCliente = async (req,res) => {
    try{
        const clientes = await Cliente.findAll()
        res.status(201).json(clientes)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const atualizaCliente = async (req,res) => {
    try{
        const cliente = Cliente.update({
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            genero: req.body.genero,
            telefone: req.body.telefone
        },
        {
            where:{
                id:req.params.id
            }
        })
        res.status(201).json("Dados do Cliente Atualizados com Sucesso.")

    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const deleteCliente = async (req,res) => {
    try{
        const cliente = await Cliente.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json({ message:'Cliente Removido' })

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaClienteById = async (req,res) => {
    try{
        const cliente = await Cliente.findOne({
            where:{
                id:req.params.id
            },
            include:{
                model:Pedido,
                attributes:['ped_id'],
                include:[{
                    model:Produto,
                    attributes:['id', 'nomeProduto', 'descricaoProduto', 'valorProduto']
                },{
                    model:Servico,
                    attributes:['id','nomeServico', 'descricaoServico', 'valorServico']
                }]
            }
        })
        res.status(201).json(cliente)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

export const getCliByCpf = async(req,res) => {
    try{
        const cliente = await Cliente.findOne({
            where:{
                cpf:{ [Op.like]: `%${req.query.cpf}%` }
            },
            attributes:['id','nome','cpf']
        })

        res.json(cliente)

    }catch(error){
        res.status(500).json({ message:error })
    }
}