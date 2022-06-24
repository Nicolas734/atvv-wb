import 'materialize-css/dist/css/materialize.min.css'
import "../pedidos/pedidos.css"
import M from 'materialize-css';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function RealizarPedido(){

    const [servicos,setServicos] = useState([]);
    const [produtos,setProdutos] = useState([]);
    const ExeMaterializeSelect = () => {
        var elems = document.querySelectorAll("select");
        var instances = M.FormSelect.init(elems, Option);
      };
    

    // -- Lista de Produtos --
    const listarProdutos = () =>{
        axios.get(`http://localhost:5000/produto/listarProdutos`).then((res)=>{
            setProdutos(res.data); 
            ExeMaterializeSelect()

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    // -- Lista de Servicos --
    const listarServicos = () =>{
        axios.get(`http://localhost:5000/servico/listarServicos`).then((res)=>{
            setServicos(res.data);
            ExeMaterializeSelect()
        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarProdutos()
        listarServicos()
    }, [])

    return(
        <div className='container'>
            <h3 className='title'>Realizar Pedido</h3>
            <form className="col s12 formCli">
                    <div className="row">
                        <div className="input-field">
                            <input id="CPF" type="text" className="validate" />
                            <label htmlFor="CPF">Digite o CPF do cliente</label>
                        </div>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select multiple>
                        <option value="" disabled>Selecione o Produto</option>
                        {produtos.map(prod => (
                            <option key={prod.id} value={prod.id}>{prod.nomeProduto}</option>
                        ))}
                        </select>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select multiple>
                        <option value="" disabled>Selecione o Serviço</option>
                        {servicos.map(serv =>(
                            <option key={serv.id} value={serv.id}>{serv.nomeServico}</option>
                        ))}
                        </select>
                    </div>

                    <div className="row">
                        <div className="col s12 center">
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action">Realizar Pedido
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    )
}