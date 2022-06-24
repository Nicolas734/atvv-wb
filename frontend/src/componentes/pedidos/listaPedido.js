import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import M from 'materialize-css';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ListaPedidos(){

    const [pedidos, setPedidos] = useState([])
    const { id } = useParams();

    const listarPedidos = () => {
        axios.get('http://localhost:5000/pedido/listarPedidos').then((res)=>{
            console.log(res.data)
            setPedidos(res.data)

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarPedidos()
    }, [])

    return(            
        <div className="containerPed">

            <h2>Listagem Geral dos Pedidos</h2>

            <div className="collection home">
                {pedidos.map(ped => (
                    <Link key={ped.ped_id} to={`/Pedido/${ped.ped_id}`} className="collection-item pointer">Pedido de Id {ped.ped_id}</Link>
                ))}
            </div>

        </div>
    )
}