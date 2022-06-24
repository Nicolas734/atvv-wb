
import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CadastroProdutos(){
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');

// -- Cadastro de Produto --
const cadastraProduto = () =>{
        let url = 'http://localhost:5000/produto/cadastrarProduto'
        let obj = {
            nomeProduto,
            descricaoProduto,
            valorProduto,
            
        }
        axios.post(url, obj).then((res) => {
        }).catch((erro)=>{
                console.error('Erro', erro.response)
        }) 
    };  

    useEffect(()=>{

    }, []);

    return(
        <div className="containerProd">
                <div className="row ">
                    <h4>Cadastro de Produto</h4>
                    <form className="col s12 formProd">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={nomeProduto} id="Nome_produto" type="text" className="validate" onChange={e=>setNomeProduto(e.target.value)}/>
                                <label htmlFor="Nome_produto">Nome do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={descricaoProduto} id="Descricao_produto" type="text" className="validate" onChange={e=>setDescricaoProduto(e.target.value)}/>
                                <label htmlFor="Descricao_produto">Descrição do produto</label>
                            </div>                           
                        </div>

                        <div className="row">

                            <div className="input-field col s6">
                                <input value={valorProduto} id="Valor_produto" type="text" className="validate" onChange={e=>setValorProduto(e.target.value)}/>
                                <label htmlFor="Valor_produto">Valor do produto</label>
                            </div>                           
                        </div>                        
                        <div className="row">
                            <div className="col s12 center">
                                <button className="btn waves-effect waves-light pink lighten-2" type="submit" name="action" onClick={cadastraProduto}>Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};