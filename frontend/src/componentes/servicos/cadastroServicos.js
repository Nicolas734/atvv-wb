import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../servicos/cadastroServicos.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CadastroServicos(){
    const [nomeServico,setNomeServico] = useState('');
    const [descricaoServico,setDescricaoServico] = useState('');
    const [valorServico, setValorServico] = useState('');

// -- Cadastro de Serviço --
const cadastraServico = () =>{    
        let url = 'http://localhost:5000/servico/cadastrarServico'
        let obj = {
            nomeServico,
            descricaoServico,
            valorServico,
            
        }
        axios.post(url, obj).then((res) => {  
            M.toast({html: 'Serviço Cadastrado com Sucesso !'})      
        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    };  


    useEffect(()=>{

    }, []);

        return (
            <div className="containerServ">
                <div className="row ">
                <h4>Cadastro de Serviço</h4>
                    <form className="col s12 formServ ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={nomeServico} id="Nome_Servicos" type="text" className="validate" onChange={e=>setNomeServico(e.target.value)}/>
                                <label htmlFor="Nome_Servicos">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={descricaoServico} id="Descricao_servico" type="text" className="validate" onChange={e=>setDescricaoServico(e.target.value)}/>
                                <label htmlFor="Descricao_servico">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input value={valorServico} id="Valor_Servico" type="text" className="validate" onChange={e=>setValorServico(e.target.value)}/>
                                <label htmlFor="Valor_Servico">Valor do Serviço</label>
                            </div>                          
                        </div>

                        <div className="row">
                            <div className="col s12 center">
                                <button className="btn waves-effect waves-light pink lighten-2" type="submit" name="action" onClick={cadastraServico}>Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
}