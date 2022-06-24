import 'materialize-css/dist/css/materialize.min.css';
import "../clientes/cadastroCliente.css";
import M from 'materialize-css'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function CadastroCliente(){

    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');

    const cadastraCliente = () => {
        let url = 'http://localhost:5000/cliente/cadastrarCliente'
        let obj = {
            nome,
            nomeSocial,
            genero,
            cpf,
            rg,
            telefone
        }

        axios.post(url, obj).then((res) => {

        }).catch((erro)=>{
                console.error('Erro', erro.response)
        }) 
    };

    const filtraGenero = (id)=>{
        if(id === '1'){        
            setGenero('M');
        }if(id === '2'){
            setGenero('F');
        }if(id === '3'){
            setGenero('N');
        } 
    }

    useEffect(()=>{
        M.AutoInit()
    }, []);

    return (
        <div className="containerCli">
                <div className="row ">
                <h4>Cadastro do Cliente</h4>
                    <form className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={nome} id="Nome" type="text" className="validate" onChange={e=>setNome(e.target.value)}/>
                                <label htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={nomeSocial} id="Nome_Social" type="text" className="validate" onChange={e=>setNomeSocial(e.target.value)}/>
                                <label htmlFor="Nome_Social">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <select onChange={(e) => filtraGenero(e.target.value)}>
                                    <option value="" disabled selected>M: Masc. / F: Fem. / N: Não Infor.</option>
                                    <option value="1">M</option>
                                    <option value="2">F</option>
                                    <option value="3">N</option>
                                </select>
                                <label>Gênero</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={telefone} id="Telefone" type="text" className="validate" onChange={e=>setTelefone(e.target.value)}/>
                                <label htmlFor="Telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={cpf} id="CPF" type="text" className="validate" onChange={e=>setCpf(e.target.value)}/>
                                <label htmlFor="CPF">CPF</label>
                            </div>
                            <div className="input-field col s6 ">
                                <input value={rg} id="RG" type="text" className="validate" onChange={e=>setRg(e.target.value)} />
                                <label htmlFor="RG">RG</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="col s12 center ">
                                <button className="btn waves-effect waves-light pink lighten-2" type="submit" name="action" onClick={cadastraCliente}>Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )
}