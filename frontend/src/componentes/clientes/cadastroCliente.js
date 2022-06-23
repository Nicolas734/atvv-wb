import 'materialize-css/dist/css/materialize.min.css'
import "../clientes/cadastroCliente.css"

export default function CadastroCliente(){
    return (
        <div className="containerCli">
                <div className="row ">
                <h4>Cadastro do Cliente</h4>
                    <form className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Nome" type="text" className="validate" />
                                <label htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Nome_Social" type="text" className="validate" />
                                <label htmlFor="Nome_Social">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Genero" type="text" className="validate" />
                                <label htmlFor="Genero">Gênero</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Telefone" type="text" className="validate" />
                                <label htmlFor="Telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="CPF" type="text" className="validate" />
                                <label htmlFor="CPF">CPF</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="emissao_cpf" type="text" className="validate" />
                                <label htmlFor="emissao_cpf">Data de emissão CPF</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="RG" type="text" className="validate" />
                                <label htmlFor="RG">RG</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="emissao_rg" type="text" className="validate" />
                                <label htmlFor="emissao_rg">Data de emissão RG</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="col s12 center ">
                                <button className="btn waves-effect waves-light pink lighten-2" type="submit" name="action">Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )
}