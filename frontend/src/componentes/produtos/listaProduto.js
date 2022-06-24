import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import M from 'materialize-css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function ListaProduto(props){
    let estilo = `collection-item active  pink lighten-2 ${props.tema}`
    const [produtos,setProdutos] = useState([]);
    const { id } = useParams();

    // -- Lista de Produtos --
    const listarProdutos = () =>{
        axios.get(`http://localhost:5000/produto/listarProdutos`).then((res)=>{
            setProdutos(res.data)

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarProdutos()
    }, [])

        return (
            <div className="containerProd">

                <h2>Listagem dos Produtos</h2>

                <div className="collection home">
                    {produtos.map(prod => (
                        <Link key={prod.id} to={`/produto/${prod.id}`} className="collection-item pointer">{prod.nomeProduto}</Link>
                    ))}
                </div>
            </div>
        )
}
