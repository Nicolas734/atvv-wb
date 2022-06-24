import { Routes,Route } from "react-router-dom";
import Cadastros from "../cadastros/cadastros";
import ListaClientes from "../clientes/listaClientes";
import Cliente from "../clientes/Clientes";
import Produto from "../produtos/produtos";
import Servico from "../servicos/servicos";
import CadastroCliente from "../clientes/cadastroCliente";
import CadastroProdutos from "../produtos/cadastroProduto";
import CadastroServicos from "../servicos/cadastroServicos";
import ListaProdutos from "../produtos/listaProduto";
import ListaServicos from "../servicos/listaServicos";
import Listagens from "../listagens/listagens";
import RealizarPedido from "../pedidos/realizarPedido";
import AtualizaProduto from '../produtos/atualizaProduto';
import AtualizaServico from '../servicos/atualizaServico'
import AtualizaCliente from '../clientes/atualizaCliente'
import ListaPedidos from "../pedidos/listaPedido";
import Pedido from "../pedidos/pedido";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/Home" element={<Cadastros tema="purple lighten-4"/>}/>
            <Route path="/" element={<Cadastros tema="purple lighten-4"/>}/>
            <Route path="/Clientes" element={<ListaClientes tema="purple lighten-4"/>}/>
            <Route path="/Produtos" element={<ListaProdutos tema="purple lighten-4"/>}/>
            <Route path="/Servicos" element={<ListaServicos tema="purple lighten-4"/>}/>
            <Route path="/Pedidos" element={<ListaPedidos tema="purple lighten-4"/>}/>
            <Route path="/CadastroCliente" element={<CadastroCliente tema="purple lighten-4"/>} />
            <Route path="/CadastroProduto" element={<CadastroProdutos tema="purple lighten-4"/>}/>
            <Route path="/CadastroServico" element={<CadastroServicos tema="purple lighten-4"/>}/>
            <Route path="/CadastroPedido" element={<RealizarPedido tema="purple lighten-4"/>}/>
            <Route path="/Cliente/:id" element={<Cliente tema="purple lighten-4"/>}/>
            <Route path="/Produto/:id" element={<Produto tema="purple lighten-4"/>}/>
            <Route path="/Servico/:id" element={<Servico tema="purple lighten-4"/>}/>
            <Route path="/Pedido/:id" element={<Pedido tema="purple lighten-4"/>}/>
            <Route path="/Listagens" element={<Listagens tema="purple lighten-4"/>}/>
            <Route path="/AtualizaProduto/:id" element={<AtualizaProduto tema="purple lighten-4"/>}/>
            <Route path="/AtualizaServico/:id" element={<AtualizaServico tema="purple lighten-4"/>}/>
            <Route path="/AtualizaCliente/:id" element={<AtualizaCliente tema="purple lighten-4"/>}/>
        </Routes>
    )
}