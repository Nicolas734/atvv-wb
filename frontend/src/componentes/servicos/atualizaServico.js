import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../servicos/cadastroServicos.css'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CadastroServicos(){
    const [nomeServico,setNomeServico] = useState('');
    const [descricaoServico,setDescricaoServico] = useState('');
    const [valorServico, setValorServico] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

// -- Atualização de Serviço --

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

    const atualizaServico = () =>{
        let obj = {
            nomeServico,
            descricaoServico,
            valorServico
        }
        axios.put(`http://localhost:5000/servico/atualizarServico/${id}`, obj).then((res) => {
            setNomeServico(null)
            setDescricaoServico(null)
            setValorServico(null)
            navigate('/Servicos')

            }).catch((erro)=>{
                    console.error('Erro', erro.response)
            }) 
        };


    useEffect(()=>{
        listarServico()
    }, []);

        return (
            <div className="containerServ">
                <div className="row ">
                <h4>Cadastro de Serviço</h4>
                    <div className="col s12 formServ ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={nomeServico} id="Nome_Servicos" type="text" className="validate" onChange={e=>setNomeServico(e.target.value)}/>
                                <label className="active" htmlFor="Nome_Servicos">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={descricaoServico} id="Descricao_servico" type="text" className="validate" onChange={e=>setDescricaoServico(e.target.value)}/>
                                <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={valorServico} id="Valor_Servico" type="text" className="validate" onChange={e=>setValorServico(e.target.value)}/>
                                <label className="active" htmlFor="Valor_Servico">Valor do Serviço</label>
                            </div>                          
                        </div>

                        <div className="row">
                            <div className="col s12 center">
                                    <button className="btn waves-effect waves-light pink lighten-2" type="button" onClick={atualizaServico}>Atualizar Serviço
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}