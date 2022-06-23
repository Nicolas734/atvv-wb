import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import { useEffect } from 'react'; 
import M from 'materialize-css'

export default function Produto(props){

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
            <div className="containerProd">
                <h2 className="nomeProd">Pente para careca</h2>
                    <ul className="collapsible popout">
                        {/* produtos */}
                        <li>
                            <div className="collapsible-header home"><i className="material-icons">info_outline</i>Informações</div>
                            <div className="collapsible-body">
                                    
                                <div className="input-field col s12">
                                    <input id="Descrição_produto" type="text" className="validate"/>
                                    <label className="active" htmlFor="Descrição_produto">Descrição do produto</label>
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