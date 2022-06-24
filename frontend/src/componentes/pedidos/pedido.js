import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState } from 'react'; 
import M from 'materialize-css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Pedido(props){

    //Produto
    const [idProduto,setIdProduto] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');

    //Serviço
    const [idServico,setIdServico] = useState('');
    const [nomeServico,setNomeServico] = useState('');
    const [valorServico, setValorServico] = useState('');

    //Pedido
    const [idCliente,setIdCliente] = useState('');
    const [nomeCliente,setNomeCliente] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const { id } = useParams()
    const navigate = useNavigate()

    const listarPedido = () => {
        axios.get(`http://localhost:5000/pedido/listarPedido/${id}`).then((res)=>{

            //Produto
            setIdProduto(res.data.produto?.id);
            setNomeProduto(res.data.produto?.nomeProduto);
            setValorProduto(res.data.produto?.valorProduto);

            //Serviço
            setIdServico(res.data.servico?.id);
            setNomeServico(res.data.servico?.nomeServico);
            setValorServico(res.data.servico?.valorServico);

            //Cliente
            setIdCliente(res.data.cliente?.id);
            setNomeCliente(res.data.cliente?.nome);
            setCpf(res.data.cliente?.cpf);
            setTelefone(res.data.cliente?.telefone);

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    const deletarPedido = () =>{
        axios.delete(`http://localhost:5000/pedido/removerPedido/${id}`).then((res)=>{
        navigate('/Pedidos')
        
    }).catch((erro)=>{
        console.error('Erro', erro.response);
    }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarPedido()
    }, [])

    return(
        <div className="containerPed">

            <h2>Pedido de Id {id}</h2>

                <div>
                {idProduto ? (<h4 className='pedFont'><strong>Produto</strong></h4>) : (<></>) }
                    {idProduto ? (<table className='responsive-table centered espacamento-tabela'>
                        <thead>
                        <tr>
                            {idProduto ? (<th>Id do Pedido</th>) : (<></>) }
                            {idProduto ? (<th>Id do Produto</th>) : (<></>) }
                            {idProduto ? (<th>Nome do Produto</th>) : (<></>) }
                            {idProduto ? (<th>Valor do Produto</th>) : (<></>) }

                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                            {idProduto ? (<td><strong>{id}</strong></td>) : (<></>) }
                            {idProduto ? (<td><strong>{idProduto}</strong></td>) : (<></>) }
                            {idProduto ? (<td>{nomeProduto}</td>) : (<></>) }
                            {idProduto ? (<td>{valorProduto}</td>) : (<></>) }
                        </tr>                          

                        </tbody>
                    </table>) : (<></>) }
                </div>

                <div>
                    {idServico ? (<h4 className='pedFont'><strong>Serviço</strong></h4>): (<></>)}
                    {idServico ? (<table className='responsive-table centered espacamento-tabela'>
                            <thead>
                            <tr>
                                {idServico ? (<th>Id do Pedido</th>) : (<></>) }
                                {idServico ? (<th>Id do Serviço</th>) : (<></>) }
                                {idServico ? (<th>Nome do Serviço</th>) : (<></>) }
                                {idServico ? (<th>Valor do Serviço</th>) : (<></>) }
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                {idServico ? (<td><strong>{id}</strong></td>) : (<></>) }
                                {idServico ? (<td><strong>{idServico}</strong></td>) : (<></>) }
                                {idServico ? (<td>{nomeServico}</td>) : (<></>) }
                                {idServico ? (<td>{valorServico}</td>) : (<></>) }
                            </tr>                          

                            </tbody>
                        </table>) : (<></>) }
                </div>

                <div>
                    <h4 className='pedFont'><strong>Cliente do Pedido</strong></h4>
                    {idCliente ? (<table className='responsive-table centered espacamento-tabela'>
                            <thead>
                            <tr>
                                {idCliente ? (<th>Id do Cliente</th>) : (<></>) }
                                {idCliente ? (<th>Nome do Cliente</th>) : (<></>) }
                                {idCliente ? (<th>CPF</th>) : (<></>) }
                                {idCliente ? (<th>Telefone</th>) : (<></>) }
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                {idCliente ? (<td><strong>{idCliente}</strong></td>) : (<></>) }
                                {idCliente ? (<td>{nomeCliente}</td>) : (<></>) }
                                {idCliente ? (<td>{cpf}</td>) : (<></>) }
                                {idCliente ? (<td>{telefone}</td>) : (<></>) }
                            </tr>                          

                            </tbody>
                        </table>) : (<></>) }
                </div>

                <button className="btn waves-effect waves-light pink lighten-2 botaoCancela" type="submit" name="action" onClick={deletarPedido}>Cancelar Pedido</button>


        </div>
    )
}