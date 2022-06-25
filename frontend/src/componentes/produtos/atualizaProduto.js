import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CadastroProdutos(props){
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

// -- Atualização de Produto --

const listarProduto = () =>{
    axios.get(`http://localhost:5000/produto/listarProduto/${id}`).then((res)=>{
        setNomeProduto(res.data.nomeProduto);
        setDescricaoProduto(res.data.descricaoProduto);
        setValorProduto(res.data.valorProduto);
       
    }).catch((erro)=>{
        console.error('Erro', erro.response);
    }) 
};


const atualizaProduto = () =>{
    let obj = {
        nomeProduto,
        descricaoProduto,
        valorProduto
    }
    axios.put(`http://localhost:5000/produto/atualizarProduto/${id}`, obj).then((res) => {
        setNomeProduto(null)
        setDescricaoProduto(null)
        setValorProduto(null)
        navigate('/Produtos')

        }).catch((erro)=>{
                console.error('Erro', erro.response)
        }) 
    };  

    useEffect(()=>{
        listarProduto();
    }, []);

    return(
        <div className="containerProd">
                <div className="row ">
                    <h4>Cadastro de Produto</h4>
                    <div className="col s12 formProd">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={nomeProduto} id="Nome_produto"  type="text" className="validate" onChange={e=>setNomeProduto(e.target.value)}/>
                                <label className='active' for="Nome_produto">Nome Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={descricaoProduto} id="Descricao_produto" type="text" className="validate" onChange={e=>setDescricaoProduto(e.target.value)}/>
                                <label className='active' htmlFor="Descricao_produto">Descrição do Produto</label>
                            </div>                           
                        </div>

                        <div className="row">

                            <div className="input-field col s6">
                                <input value={valorProduto} id="Valor_produto" type="text" className="validate" onChange={e=>setValorProduto(e.target.value)}/>
                                <label className='active' htmlFor="Valor_produto">Valor do Produto</label>
                            </div>                           
                        </div>                        
                        <div className="row">
                            <div className="col s12 center">                                
                                <button className="btn waves-effect waves-light pink lighten-2" type="button" onClick={atualizaProduto}>Atualizar Produto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};