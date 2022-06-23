import { Component, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../cadastros/cadastros.css"
import M from 'materialize-css'
import { Link } from "react-router-dom";


export default function Cadastros(props){
    const estilo = `collection-item active ${props.tema}`
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        M.AutoInit();
    },[]);

    return(
        <div className="containerCadastro">
            <h2>Cadastros</h2>
            <div className="collection home">
                <Link to={'/CadastroCliente'} className="collection-item pointer">Cadastrar Cliente</Link>
                <Link to={'/CadastroProduto'} className="collection-item pointer">Cadastrar Produtos</Link>
                <Link to={'/CadastroServico'} className="collection-item pointer">Cadastrar Serviços</Link>
            </div>
        </div>
    )
}