/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListaClientes(props) {
    const estilo = `collection-item active pink lighten-2${props.tema}`

        const [clientes,setClientes] = useState([])

        const listarClientes = () => {
            axios.get('http://localhost:5000/cliente/listarClientes').then((res) => {
                setClientes(res.data)
            }).catch((erro)=>{
                console.error('Erro', erro.response)
            }) 
        }

        const filtraGenero = (e) => {
            if (e.target.value === 'Todos'){
                listarClientes()
            }
            else{
                axios.get(`http://localhost:5000/listagem/listagemByGenero/${e.target.value}`).then((res) => {
                    setClientes(res.data.cliente)
                }).catch((erro)=>{
                    console.error('Erro', erro.response)
                }) 
            }
        }

        useEffect(() => { 
                M.AutoInit()
                listarClientes()
        }, [])

    return (

        <div className="containerCli nomeCli ">

            <h2>Listagem de Clientes</h2>

            <div className="input-field col s12 opcoes">
                <select onChange={filtraGenero}>
                <option value="" disabled>Listar Clientes por Gênero</option>
                    <option value="Todos">Todos</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="N">Não Informado</option>
                </select>
            </div>

            <div className="collection home">
                {clientes.map( cli => (

                    <Link key={cli.id} to={`/Cliente/${cli.id}`} className="collection-item pointer">{cli.nome}</Link>

                ))}
            </div>

        </div>
    )
}