import 'materialize-css/dist/css/materialize.min.css';
import "../clientes/cadastroCliente.css";
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

export default function CadastroCliente(){

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

    const atualizaCliente = () =>{
        let obj = {
            nome,
            nomeSocial,
            telefone
        }
        axios.put(`http://localhost:5000/cliente/atualizarCliente/${id}`, obj).then((res) => {
            setNome(null)
            setNomeSocial(null)
            setTelefone(null)
            navigate('/Clientes')            

            }).catch((erro)=>{
                    console.error('Erro', erro.response)
            }) 
        };  
    

    useEffect(()=>{
        listarCliente()
    }, []);

    return (
        <div className="containerCli">
                <div className="row ">
                <h4>Atualizar Dados Cliente</h4>
                    <div className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={nome} id="Nome" type="text" className="validate" onChange={e=>setNome(e.target.value)}/>
                                <label className='active' htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={nomeSocial} id="Nome_Social" type="text" className="validate" onChange={e=>setNomeSocial(e.target.value)}/>
                                <label className='active' htmlFor="Nome_Social">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                            
                            <div className="input-field col s6">
                                <input value={telefone} id="Telefone" type="text" className="validate" onChange={e=>setTelefone(e.target.value)}/>
                                <label className='active' htmlFor="Telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="col s12 center ">
                            <button className="btn waves-effect waves-light pink lighten-2" type="button"  onClick={atualizaCliente}>Atualizar Cliente
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}