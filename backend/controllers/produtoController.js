import Produto from "../models/produto.js";

export const criaProduto = async (req,res) =>{
    try{
        const produto = await Produto.create({
            nomeProduto:req.body.nomeProduto,
            descricaoProduto:req.body.descricaoProduto,
            valorProduto:req.body.valorProduto
        })
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({message:error})
    }
}

export const listaAllProduto = async (req,res) =>{
    try{
        const produto = await Produto.findAll({})
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({message:error})
    }
}

export const atualizaProduto = async (req,res)=>{
    try{
        const produto = await Produto.update({
            nomeProduto:req.body.nomeProduto,
            descricaoProduto:req.body.descricaoProduto,
            valorProduto:req.body.valorProduto
        },{
            where:{
                id:req.params.id
            }
        })
       res.status(201).json("Dados do Produto Atualizados com Sucesso.")

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

export const deletaProduto = async (req,res)=>{
    try{ 
        const produto = await Produto.destroy({
        where:{
            id:req.params.id
         }
    })
    res.status(201).json({message: 'Produto Deletado'})

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

export const listaProdutoByID = async (req,res)=>{
    try{
        const produto = await Produto.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({message:error})
    }
}