import Cliente from "../models/cliente.js";
import Pedido from "../models/pedido.js";
import Produto from "../models/produto.js";
import Servico from "../models/servico.js";

export const criaPedido = async (req,res) => {
    try{
        const pedido = Pedido.create({
            cli_id: req.body.cli_id,
            prod_id: req.body.prod_id,
            serv_id: req.body.serv_id,
            valorPedido: req.body.valorPedido
        })
        res.status(201).json(pedido)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaAllPedido = async (req,res) => {
    try{
        const pedidos = await Pedido.findAll()
        res.status(201).json(pedidos)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const atualizaPedido = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const deletePedido = async (req,res) => {
    try{
        const pedido = await Pedido.destroy({
            where:{
                ped_id:req.params.id
            }
        })
        const id = req.params.id
        res.status(201).json({message: `Pedido de id ${id} Deletado`})

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaPedidoById = async (req,res) => {
    try{
        const pedido = await Pedido.findOne({
            where:{
                ped_id:req.params.id
            },
            attributes:['ped_id'],
            include:[{
                model:Produto,
                attributes:['id', 'nomeProduto', 'descricaoProduto', 'valorProduto']
            },{
                model:Servico,
                attributes:['id','nomeServico', 'descricaoServico', 'valorServico']
            },{
                model:Cliente,
                attributes:['id','nome','cpf','telefone']
            }
        ]
        })
        res.status(201).json(pedido)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}