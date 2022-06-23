
import 'materialize-css/dist/css/materialize.min.css'

import "../produtos/cadastroProduto.css"

export default function CadastroProdutos(){
    return(
        <div className="containerProd">
                <div className="row ">
                    <h4>Cadastro de Produto</h4>
                    <form className="col s12 formProd">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Nome_produto" type="text" className="validate" />
                                <label htmlFor="Nome_produto">Nome do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Descricao_produto" type="text" className="validate" />
                                <label htmlFor="Descricao_produto">Descrição do produto</label>
                            </div>                           
                        </div>

                        <div className="row">

                            <div className="input-field col s6">
                                <input id="Valor_produto" type="text" className="validate" />
                                <label htmlFor="Valor_produto">Valor do produto</label>
                            </div>                           
                            <div className="input-field col s6 ">
                                <input id="Codigo__indentificação_produto" type="text" className="validate" />
                                <label htmlFor="Codigo__indentificação_produto">Código de identificação do produto</label>
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