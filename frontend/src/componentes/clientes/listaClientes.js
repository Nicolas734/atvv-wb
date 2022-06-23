/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListaClientes(props) {
    const estilo = `collection-item active pink lighten-2${props.tema}`
        useEffect(() => { 
                M.AutoInit()
        }, [])

    return (

        <div className="containerCli nomeCli ">

            <h2>Listagem de Clientes</h2>

            <div className="input-field col s12 opcoes">
                <select>
                <option value="" disabled>Listar clientes por genero</option>
                    <option value="1">Todos</option>
                    <option value="2">Masculino</option>
                    <option value="3">Feminino</option>
                    <option value="4">Não Informado</option>
                </select>
            </div>

            <div className="collection home">
                <Link to={"/Cliente"} className="collection-item pointer">Cliente 1</Link>
                <Link to={"/Cliente"} className="collection-item pointer">Cliente 2</Link>
                <Link to={"/Cliente"} className="collection-item pointer">Cliente 3</Link>
                <Link to={"/Cliente"} className="collection-item pointer">Cliente 4</Link>
            </div>
        </div>
    )
}