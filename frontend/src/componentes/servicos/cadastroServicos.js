import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'

export default function CadastroServicos(){
        return (
            <div className="containerServ">
                <div className="row ">
                <h4>Cadastro de Serviço</h4>
                    <form className="col s12 formServ ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Nome_Servicos" type="text" className="validate" />
                                <label htmlFor="Nome_Servicos">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Descricao_servico" type="text" className="validate" />
                                <label htmlFor="Descricao_servico">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Valor_Servico" type="text" className="validate" />
                                <label htmlFor="Valor_Servico">Valor do Serviço</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Codigo_indentificacao_servico" type="text" className="validate" />
                                <label htmlFor="Codigo_indentificacao_servico">Codigo de indentificação do serviço </label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="col s12 center">
                                <button className="btn waves-effect waves-light pink lighten-2" type="submit" name="action">Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
}