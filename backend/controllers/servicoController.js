import Servico from "../models/servico.js"


export const criaServico = async (req,res) =>{
    try{
        const servico = await Servico.create({
            nomeServico:req.body.nomeServico,
            descricaoServico:req.body.descricaoServico,
            valorServico:req.body.valorServico
        })
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listAllServico = async  (req,res) =>{
    try{
        const servico = await Servico.findAll({})
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const atualizaServico = async (req,res)=>{
    try{
        const servico = await Servico.update({
            nomeServico:req.body.nomeServico,
            descricaoServico:req.body.descricaoServico,
            valorServico:req.body.valorServico
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(201).json("Dados do Serviço Atualizados com Sucesso.")

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
    
}

export const deletaServico = async (req,res) =>{
    try{
        const servico = await Servico.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json({message:'Serviço Deletado'})

    }catch(error){
        console.log(error);
        res.json({message:error})
    }
}

export const listaServicoById = async (req, res) =>{
    try{
        const servico = await Servico.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({message:error})
    }
}