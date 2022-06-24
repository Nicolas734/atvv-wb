import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import { useEffect, useState } from 'react';
import M from 'materialize-css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Servico(){

    const [nomeServico,setNomeServico] = useState('');
    const [descricaoServico,setDescricaoServico] = useState('');
    const [valorServico, setValorServico] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

    const listarServico = () =>{
        axios.get(`http://localhost:5000/servico/listarServico/${id}`).then((res)=>{
            setNomeServico(res.data.nomeServico);
            setDescricaoServico(res.data.descricaoServico);
            setValorServico(res.data.valorServico);
            console.log(res);

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    const deletarServico= () =>{
        axios.delete(`http://localhost:5000/servico/removerServico/${id}`).then((res)=>{
            navigate('/Servicos')

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
        
    }

    useEffect(() => {
        M.AutoInit()
        listarServico()
    }, [])

    return (
        <div className="containerServ">
        <h2 className="nomeServ">{nomeServico}</h2>
            <ul className="collapsible popout">
                {/* Serviços */}
                <li>
                    <div className="collapsible-header home"><i className="material-icons">work</i>Informações do Serviço</div>
                    <div className="collapsible-body">

                        <div className="input-field col s12">
                            <input disabled id="Descricao_servico" type="text" value={descricaoServico} onChange={()=>setDescricaoServico(descricaoServico)} className="validate"/>
                            <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                        </div>

                        <div className="input-field col s12">
                            <input disabled id="Valor_servico" type="text"  value={valorServico} onChange={()=>setValorServico(valorServico)} className="validate"/>
                            <label className="active" htmlFor="Valor_servico">Valor do serviço</label>
                        </div>

                        <div className="input-field col s12">
                            <input disabled id="Codigo_identificacao" type="text"  value={id} className="validate"/>
                            <label className="active" htmlFor="Codigo_identificacao">Código de identificação</label>
                        </div>

                    </div>
                </li>
            </ul>

            <div className="row">
                <div className="col s12 center">
                <Link to={`/AtualizaServico/${id}`}>
                    <button className="btn waves-effect pink lighten-2 button botaoAtualiza" type="submit" name="action">Atualizar</button>
                </Link>
                    <button className="btn waves-effect pink lighten-2 button" type="submit" name="action" onClick={deletarServico}>Deletar Serviço</button>
                </div>
            </div>

        </div>
    )
}