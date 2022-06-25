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
    const [pedidos, setPedidos] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const listarCliente = () => {
        axios.get(`http://localhost:5000/cliente/listarCliente/${id}`).then((res) => {
            setNome(res.data.nome);
            setNomeSocial(res.data.nomeSocial);
            setGenero(res.data.genero);
            setCpf(res.data.cpf);
            setRg(res.data.rg);
            setTelefone(res.data.telefone);
            setPedidos(res.data.pedidos);

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
                <div className="row">
                        <div className="col s12">
                            <ul className="tabs-swipe-demo tabs tabsConsumo">
                                <li className="tab col s2"><a href="#test-swipe-1">Dados Pessoaisa</a></li>
                                <li className="tab col s2"><a href="#test-swipe-2">Produtos</a></li>
                                <li className="tab col s2"><a href="#test-swipe-3">Serviços</a></li>                   
                            </ul>
                        </div>
                        
                        <div id="test-swipe-1" className="col s12"> 
                            {/* Cliente */}                        
                            <div className="row home">
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
        
                           
                        <div id="test-swipe-2" className="col s12"> 
                            <table className='responsive-table centered home'>
                                <thead>
                                    <tr>
                                        <th>Id do Pedido</th>
                                        <th>Id do Produto</th>
                                        <th>Nome do Produto</th>
                                        <th>Valor do Produto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pedidos.map(ped => (
                                    <tr>
                                        {ped.produto ? (<td>{ped.ped_id}</td>):(<></>) }
                                        {ped.produto ? (<td>{ped.produto?.id}</td>):(<></>) }
                                        {ped.produto ? (<td>{ped.produto?.nomeProduto}</td>):(<></>) }
                                        {ped.produto ? (<td>{ped.produto?.valorProduto}</td>):(<></>) }
                                    </tr>                          
                                    ))}
                                </tbody>
                            </table>
                        </div>
                                                   
                            
                        <div id="test-swipe-3" className="col s12">
                            <table className='responsive-table centered home'>
                                <thead>
                                    <tr>
                                        <th>Id do Pedido</th>
                                        <th>Id do Serviço</th>
                                        <th>Nome do Serviço</th>
                                        <th>Valor do Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {pedidos.map(serv => (
                                    <tr>
                                        {serv.servico ? (<td>{serv.ped_id}</td>):(<></>) }
                                        {serv.servico ? (<td>{serv.servico?.id}</td>):(<></>) }
                                        {serv.servico ? (<td>{serv.servico?.nomeServico}</td>):(<></>) }
                                        {serv.servico ? (<td>{serv.servico?.valorServico}</td>):(<></>) }
                                    </tr>                          
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                      
                    <div className="row">
                        <div className="col s12 center">
                            <Link to={`/AtualizaCliente/${id}`}>
                            <button className="btn waves-effect  pink lighten-2 button botaoAtualiza" type="submit" name="action">Atualizar
                            </button>
                            </Link>
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action" onClick={deletarCliente}>Remover Cliente
                            </button>
                        </div>
                    </div>     
                </div>
            </div> 
    )
}