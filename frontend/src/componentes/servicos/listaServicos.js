import { Component, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { useEffect } from 'react';
import M from 'materialize-css'
import { Link } from "react-router-dom";
import axios from "axios";


export default function ListaServicos(props){
    let estilo = `collection-item active pink lighten-2 ${props.tema}`

    const [servicos,setServicos] = useState([]);

    const listarServicos = () =>{
        axios.get(`http://localhost:5000/servico/listarServicos`).then((res)=>{
            setServicos(res.data)
            console.log(res);

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarServicos()
    }, [])

        return (
            <div className="containerServ">

                <h2>Listagem dos Serviços</h2>

                <div className="collection home">

                    {servicos.map( serv => (
                        <Link key={serv.id} to={`/Servico/${serv.id}`} className="collection-item pointer">{serv.nomeServico}</Link>
                    ))}
                </div>
            </div>
        )
}