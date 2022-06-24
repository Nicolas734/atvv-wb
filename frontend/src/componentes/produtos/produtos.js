import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import { useEffect, useState } from 'react'; 
import M from 'materialize-css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Produto(props){
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

    const listarProduto = () =>{
        axios.get(`http://localhost:5000/produto/listarProduto/${id}`).then((res)=>{
            setNomeProduto(res.data.nomeProduto);
            setDescricaoProduto(res.data.descricaoProduto);
            setValorProduto(res.data.valorProduto);

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    };

    const deletarProduto = () =>{
        axios.delete(`http://localhost:5000/produto/removerProduto/${id}`).then((res)=>{
            navigate('/Produtos')

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
        
    }

    useEffect(() => { 
        M.AutoInit();
        listarProduto();
    }, [])

    return(
            <div className="containerProd">
                <h2 className="nomeProd">{nomeProduto}</h2>
                    <ul className="collapsible popout">
                        {/* produtos */}
                        <li>
                            <div className="collapsible-header home"><i className="material-icons">info_outline</i>Informações</div>
                            <div className="collapsible-body">
                                    
                                <div className="input-field col s12">
                                    <input disabled id="Descrição_produto" type="text" value={descricaoProduto} onChange={()=>setDescricaoProduto(descricaoProduto)} className="validate"/>
                                    <label className="active" htmlFor="Descrição_produto">Descrição do produto</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Valor_produto" type="text" value={valorProduto} onChange={()=>setValorProduto(valorProduto)} className="validate"/>
                                    <label className="active" htmlFor="Valor_produto">Valor do produto</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Codigo_identificacao" type="text" value={id} className="validate"/>
                                    <label className="active" htmlFor="Codigo_identificacao" >Código de identificação</label>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="row">
                        <div className="col s12 center">
                            <Link to={`/AtualizaProduto/${id}`}>
                                <button className="btn waves-effect  pink lighten-2 button botaoAtualiza" type="submit" name="action">Atualizar</button>
                            </Link>
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action" onClick={deletarProduto}>Deletar </button>                               
                        </div>
                    </div>

            </div>
    )
}