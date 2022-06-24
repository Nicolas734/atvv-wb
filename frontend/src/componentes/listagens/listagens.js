import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState } from 'react';
import M from 'materialize-css';
import "../listagens/listagens.css"
import axios from 'axios';


export default function Listagens(props){

    const [listQuantidade,setListQuantidade] = useState([]);
    const [listConsumoTotal,setListConsumoTotal] = useState([]);
    const [listlessConsum,setListlessConsum] = useState([]);
    const [listConsumoValor,setListConsumoValor] = useState([]);
    const [ordenadoM,setOrdenadoM] = useState([]);
    const [ordenadoF,setOrdenadoF] = useState([]);
    const [ordenadoN,setOrdenadoN] = useState([]);


    // 1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
    const listagemQuantidade = () => {
        axios.get('http://localhost:5000/listagem/listagemQtd').then((res) => {
            setListQuantidade(res.data);

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    }

    // 3. Listagem geral dos serviços ou produtos mais consumidos.
    const listagemConsumoTotal = () => {
        axios.get('http://localhost:5000/listagem/listagemProdServ').then((res) => {
            setListConsumoTotal(res.data);

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    }

    // 4. Listagem dos serviços ou produtos mais consumidos por gênero.
    const listagemMostConsumByGenero = () => {
        axios.get('http://localhost:5000/listagem/listagemGeneroConsumo').then((res) => {
            setOrdenadoM(res.data.ordenadoM);
            setOrdenadoF(res.data.ordenadoF);
            setOrdenadoN(res.data.ordenadoN);


        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    }

    // 5. Listagem dos 10 clientes que menos consumiram produtos ou serviços.
    const listagemlessConsum = () =>{
    axios.get('http://localhost:5000/listagem/listagemMenorConsumo').then((res) => {
        setListlessConsum(res.data);

    }).catch((erro)=>{
        console.error('Erro', erro.response);
    }) 
}

        //6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
    const listagemConsumoValor = () => {
        axios.get('http://localhost:5000/listagem/listagemConsumoValor').then((res) => {
            setListConsumoValor(res.data);

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    }

    useEffect(() => { 
        M.AutoInit();
        listagemQuantidade();
        listagemConsumoTotal();
        listagemConsumoValor();
        listagemlessConsum();
        listagemMostConsumByGenero();
    }, [])


    return(
        <div className='containerlistagem'>
            <h2 className='title'> Listagens de Consumo </h2>
                <div className="row">
                <div className="col s12">
                    <ul className="tabs-swipe-demo tabs tabsConsumo">
                        <li className="tab col s2"><a href="#test-swipe-1">Cli.Consumo Valor</a></li>
                        <li className="tab col s2"><a href="#test-swipe-2">Cli.Maior Qtd</a></li>
                        <li className="tab col s2"><a href="#test-swipe-3">Cli.Menor Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-4">Prod/Serv Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-5">Consumo Genero</a></li>
                    </ul>
                </div>

                {/* 1. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade. */}

                    <div id="test-swipe-1" className="col s12"> 
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Valor Gasto</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listConsumoValor.map((consValor,index)=>
                                        <tr key={index}>
                                            <td>{consValor.id}</td>
                                            <td>{consValor.nome}</td>
                                            <td>{consValor.cpf}</td>
                                            <td>{consValor.total}</td>
                                        </tr> 
                                    )}                         
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/* 2. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor. */}

                    <div id="test-swipe-2" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listQuantidade.map((Qtd,index)=>
                                        <tr key={index}>
                                            <td>{Qtd.id}</td>
                                            <td>{Qtd.nome}</td>
                                            <td>{Qtd.cpf}</td>
                                            <td>{Qtd.total}</td>
                                        </tr> 
                                    )}                                                
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/* 3. Listagem dos 10 clientes que menos consumiram produtos ou serviços. */}

                    <div id="test-swipe-3" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {listlessConsum.map((consValor,index)=>
                                        <tr key={index}>
                                            <td>{consValor.id}</td>
                                            <td>{consValor.nome}</td>
                                            <td>{consValor.cpf}</td>
                                            <td>{consValor.total}</td>
                                        </tr> 
                                    )}                         
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/*4. Listagem geral dos serviços ou produtos mais consumidos. */}

                    <div id="test-swipe-4" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {listConsumoTotal.map((constot,index)=>
                                        <tr key={index}>
                                            {constot.nomeProduto ? (<td>{constot.id}</td>):(<td>{constot.id}</td>)}
                                            {constot.nomeProduto ? (<td>{constot.nomeProduto}</td>):(<td>{constot.nomeServico}</td>)}
                                            {constot.nomeProduto ? (<td>{constot.tipo}</td>):(<td>{constot.tipo}</td>)}
                                            {constot.nomeProduto ? (<td>{constot.qtd}</td>):(<td>{constot.qtd}</td>)}
                                        </tr> 
                                    )}                        
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/* 5. Listagem dos serviços ou produtos mais consumidos por gênero. */}

                    <div id="test-swipe-5" className="col s12"> 
                    <form>
                            <h2 className='generoConsumoFont'><strong>Masculino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Valor do Produto/Serviço</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>    
                                            {ordenadoM?.map( (m,index) => (
                                                <tr key={index} >
                                                    <td>{m.id}</td>
                                                    {m.nomeProduto ? (<td>{m.nomeProduto}</td>): (<td>{m.nomeServico}</td>)}
                                                    <td>{m.tipo}</td>
                                                    {m.valorProduto ? (<td>{m.valorProduto}</td>): (<td>{m.valorServico}</td>)}
                                                    <td>{m.qtd}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='generoConsumoFont'><strong>Feminino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Valor do Produto/Serviço</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {ordenadoF?.map((f,index)=>
                                        <tr key={index}>
                                            <td>{f.id}</td>
                                            {f.nomeProduto ? (<td>{f.nomeProduto}</td>):(<td>{f.nomeServico}</td>)}
                                            <td>{f.tipo}</td>
                                            {f.valorProduto ? (<td>{f.valorProduto}</td>):(<td>{f.valorServico}</td>)}
                                            <td>{f.qtd}</td>
                                        </tr> 
                                    )}                         
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='generoConsumoFont'><strong>Não Informado</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Valor do Produto/Serviço</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {ordenadoN?.map( n => (
                                    <tr>
                                        <td>{n.id}</td>
                                        {n.nomeProduto ? (<td>{n.nomeProduto}</td>): (<td>{n.nomeServico}</td>)}
                                        <td>{n.tipo}</td>
                                        {n.valorProduto ? (<td>{n.valorProduto}</td>): (<td>{n.valorServico}</td>)}
                                        <td>{n.qtd}</td>
                                    </tr>                           
                                    ))}

                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>
                </div>
        </div>
    )
}