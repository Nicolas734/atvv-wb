import 'materialize-css/dist/css/materialize.min.css'
import "../pedidos/pedidos.css"
import M from 'materialize-css';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function RealizarPedido(props){

    const [servicos,setServicos] = useState([]);
    const [produtos,setProdutos] = useState([]);
    const [clientes,setClientes] = useState([]);
    const [idCliente,setIdCliente] = useState();
    const [idProduto,setIdProduto] = useState();
    const [idServico,setIdServico] = useState();

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

    // -- FIltrar Cliente por CPF

    const getCliente = () => {
        axios.get(`http://localhost:5000/cliente/listarClientes`).then((res)=>{
            setClientes(res.data);
            ExeMaterializeSelect()

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    const cadastraPedido = () => {
        let url = 'http://localhost:5000/pedido/cadastrarPedido'
        let obj = {
            cli_id:idCliente,
            prod_id:idProduto,
            serv_id:idServico
        }

        axios.post(url,obj).then((res)=>{
            setIdCliente("");
            setIdProduto("");
            setIdServico("");

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarProdutos()
        listarServicos()
        getCliente()
    }, [])

    return(
        <div className='container'>
            <h3 className='title'>Realizar Pedido</h3>
            <form className="col s12 formCli">
                    <div className="row">
                        <div className="input-field col s12 opcoes">
                            <select defaultValue={0} onChange={e =>setIdCliente(e.target.value)}>
                                <option value="0" disabled>Selecione o Cliente</option>
                                {clientes.map(cli =>(
                                    <option key={cli.id} value={cli.id}>{cli.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select defaultValue={0} onChange={ e =>setIdProduto(e.target.value)}>
                            <option value="0" disabled>Selecione o Produto</option>
                            {produtos.map(prod => (
                                <option key={prod.id} value={prod.id}>{prod.nomeProduto}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select defaultValue={0} onChange={ e =>setIdServico(e.target.value)}>
                        <option value="0" disabled>Selecione o Serviço</option>
                        {servicos.map(serv =>(
                            <option key={serv.id} value={serv.id}>{serv.nomeServico}</option>
                        ))}
                        </select>
                    </div>

                    <div className="row">
                        <div className="col s12 center">
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action" onClick={cadastraPedido}>Realizar Pedido
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    )
}