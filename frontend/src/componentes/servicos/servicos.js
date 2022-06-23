import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import { useEffect } from 'react';
import M from 'materialize-css'

export default function Servico(){
    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <div className="containerServ">
        <h2 className="nomeServ">Escova Progressiva</h2>
            <ul className="collapsible popout">
                {/* Serviços */}
                <li>
                    <div className="collapsible-header home"><i className="material-icons">work</i>Informações do Serviço</div>
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
                            <input id="Codigo_identificacao" type="text" className="validate"/>
                            <label className="active" htmlFor="Codigo_identificacao">Código de identificação</label>
                        </div>

                    </div>
                </li>
            </ul>

            <div className="row">
                <div className="col s12 center">
                    <button className="btn waves-effect pink lighten-2 button" type="submit" name="action">Atualizar
                    </button>
                </div>
            </div>

        </div>
    )
}