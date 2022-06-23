import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect } from 'react';


export default function Cliente(){
    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
            <div className="containerCli">
                <h2 className="nomeCli">Natália</h2>
                    <ul className="collapsible popout">
                        <li>
                            {/* Cliente */}
                            <div className="collapsible-header home"><i className="material-icons">person</i>Dados Pessoais</div>
                            <div className="collapsible-body">
                                <div className="row">
                                <div className="input-field col s12">
                                    <input id="Nome" type="text" className="validate"/>
                                    <label className="active" htmlFor="Nome">Nome</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Nome_Social" type="text" className="validate"/>
                                    <label className="active" htmlFor="Nome_Social">Nome Social</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Gênero" type="text" className="validate"/>
                                    <label className="active" htmlFor="Gênero">Gênero</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="CPF" type="text" className="validate"/>
                                    <label className="active" htmlFor="CPF">CPF</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Emissao_CPF" type="text" className="validate"/>
                                    <label className="active" htmlFor="Emissao_CPF">Data Emissão CPF</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="RG" type="text" className="validate"/>
                                    <label className="active" htmlFor="RG">RG</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Emissao_RG" type="text" className="validate"/>
                                    <label className="active" htmlFor="Emissao_RG">Data Emissão RG</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Telefone" type="text" className="validate"/>
                                    <label className="active" htmlFor="Telefone">Telefone</label>
                                </div>
                            </div>
                            </div>
                        </li>

                        {/* produtos */}
                        <li>
                            <div className="collapsible-header"><i className="material-icons">shopping_cart</i>Produtos</div>
                            <div className="collapsible-body">
                            
                                <div className="input-field col s12">
                                    <input id="Descricao_produto" type="text" className="validate"/>
                                    <label className="active" htmlFor="Descricao_produto">Descrição do produto</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Valor_produto" type="text" className="validate"/>
                                    <label className="active" htmlFor="Valor_produto">Valor do produto</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Codigo_identificacao" type="text" className="validate"/>
                                    <label className="active" htmlFor="Codigo_identificacao">Código de identificação</label>
                                </div>
                            </div>
                        </li>

                        {/* Serviços */}
                        <li>
                            <div className="collapsible-header"><i className="material-icons">work</i>Serviços</div>
                            <div className="collapsible-body">

                                <div className="input-field col s12">
                                    <input id="Descricao_servico" type="text" className="validate"/>
                                    <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Valor_servico" type="text" className="validate"/>
                                    <label className="active" htmlFor="Valor_servico">Valor do serviço</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="Codigo_identificacaoServ" type="text" className="validate"/>
                                    <label className="active" htmlFor="Codigo_identificacaoServ">Código de identificação</label>
                                </div>

                            </div>
                        </li>
                    </ul>

                    <div className="row">
                        <div className="col s12 center">
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action">Atualizar
                            </button>
                        </div>
                    </div>

            </div>
    )
}