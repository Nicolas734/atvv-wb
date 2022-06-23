import 'materialize-css/dist/css/materialize.min.css'
import "../pedidos/pedidos.css"
import { useEffect } from 'react';
import M from 'materialize-css';

export default function RealizarPedido(){

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
        <div className='container'>
            <h3 className='title'>Realizar Pedido</h3>
            <form className="col s12 formCli">
                    <div className="row">
                        <div className="input-field">
                            <input id="CPF" type="text" className="validate" />
                            <label htmlFor="CPF">Digite o CPF do cliente</label>
                        </div>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select multiple>
                        <option value="" disabled>Selecione o Produto</option>
                            <option value="1">Pente</option>
                            <option value="2">Tinta de Cabelo</option>
                        </select>
                    </div>

                    <div className="input-field col s12 opcoes">
                        <select multiple>
                        <option value="" disabled>Selecione o Serviço</option>
                            <option value="1">Corte de Cabelo</option>
                            <option value="2">Tratamento Capilar</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col s12 center">
                            <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action">Realizar Pedido
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    )
}