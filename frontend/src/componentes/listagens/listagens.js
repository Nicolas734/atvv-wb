import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from 'react';
import M from 'materialize-css';
import "../listagens/listagens.css"
// import axios from "axios"

export default function Listagens(){

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
        <div className='container'>
            <h3 className='title'> Listagens de Consumo </h3>
                <div class="row">
                <div class="col s12">
                    <ul class="tabs-swipe-demo" className="tabs tabsConsumo">
                        <li class="tab col s2"><a href="#test-swipe-1">Cli.Consumo Valor</a></li>
                        <li class="tab col s2"><a href="#test-swipe-2">Cli.Maior Qtd</a></li>
                        <li class="tab col s2"><a href="#test-swipe-3">Cli.Menor Consumo</a></li>
                        <li class="tab col s2"><a href="#test-swipe-4">Prod/Serv Consumo</a></li>
                        <li class="tab col s2"><a href="#test-swipe-5">Consumo Genero</a></li>
                    </ul>
                </div>
                    <div id="test-swipe-1" class="col s12"> 
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="test-swipe-2" class="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-3" class="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-4" class="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-5" class="col s12"> 
                    <form>
                            <h2 className='generoConsumoFont'><strong>Masculino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
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
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
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
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>
                </div>
        </div>
    )
}