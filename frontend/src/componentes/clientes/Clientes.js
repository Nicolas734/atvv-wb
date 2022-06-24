import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function Cliente(){

    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');
    const { id } = useParams()
    const navigate = useNavigate()

    const listarCliente = () => {
        axios.get(`http://localhost:5000/cliente/listarCliente/${id}`).then((res) => {
            setNome(res.data.nome)
            setNomeSocial(res.data.nomeSocial)
            setGenero(res.data.genero)
            setCpf(res.data.cpf)
            setRg(res.data.rg)
            setTelefone(res.data.telefone)
        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    const deletarCliente = () =>{
        axios.delete(`http://localhost:5000/cliente/removerCliente/${id}`).then((res)=>{
            navigate('/Clientes')

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarCliente()
    }, [])

    return(
            <div className="containerCli">
                <h2 className="nomeCli">{nome}</h2>
                    <ul className="collapsible popout">
                        <li>
                            {/* Cliente */}
                            <div className="collapsible-header home"><i className="material-icons">person</i>Dados Pessoais</div>
                            <div className="collapsible-body">
                                <div className="row">
                                <div className="input-field col s12">
                                    <input disabled id="Nome" type="text" value={nome} onChange={()=>setNome(nome)} className="validate"/>
                                    <label className="active" htmlFor="Nome">Nome</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Nome_Social" type="text" value={nomeSocial} onChange={()=>setNome(nomeSocial)} className="validate"/>
                                    <label className="active" htmlFor="Nome_Social">Nome Social</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Gênero" type="text" value={genero} onChange={()=>setNome(genero)} className="validate"/>
                                    <label className="active" htmlFor="Gênero">Gênero</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="CPF" type="text" value={cpf} onChange={()=>setNome(cpf)} className="validate"/>
                                    <label className="active" htmlFor="CPF">CPF</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="RG" type="text" value={rg} onChange={()=>setNome(rg)} className="validate"/>
                                    <label className="active" htmlFor="RG">RG</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Telefone" type="text" value={telefone} onChange={()=>setNome(telefone)} className="validate"/>
                                    <label className="active" htmlFor="Telefone">Telefone</label>
                                </div>
                            </div>
                            </div>
                        </li>

                        {/* produtos
                        <li>
                            <div className="collapsible-header"><i className="material-icons">shopping_cart</i>Produtos</div>
                            <div className="collapsible-body">
                            
                                <div className="input-field col s12">
                                    <input id="Descricao_produto" type="text" className="validate"/>
                                    <label className="active" htmlFor="Descricao_produto">Descrição do produto</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Valor_produto" type="text" className="validate"/>
                                    <label className="active" htmlFor="Valor_produto">Valor do produto</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Codigo_identificacao" type="text" className="validate"/>
                                    <label className="active" htmlFor="Codigo_identificacao">Código de identificação</label>
                                </div>
                            </div>
                        </li>

                        {/* Serviços */}
                        {/* <li>
                            <div className="collapsible-header"><i className="material-icons">work</i>Serviços</div>
                            <div className="collapsible-body">

                                <div className="input-field col s12">
                                    <input id="Descricao_servico" type="text" className="validate"/>
                                    <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Valor_servico" type="text" className="validate"/>
                                    <label className="active" htmlFor="Valor_servico">Valor do serviço</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Codigo_identificacaoServ" type="text" className="validate"/>
                                    <label className="active" htmlFor="Codigo_identificacaoServ">Código de identificação</label>
                                </div>

                            </div>
                        </li>*/}
                    </ul>  

                    <div className="row">
                        <div className="col s12 center">
                            <Link to={`/AtualizaCliente/${id}`}>
                            <button className="btn waves-effect  pink lighten-2 button botaoAtualiza" type="submit" name="action">Atualizar
                            </button>
                            </Link>
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action" onClick={deletarCliente}>Remover Cliente</button>
                        </div>
                    </div>

            </div>
    )
}