import { Router } from "express";
import { criaCliente, listaAllCliente, listaClienteById, atualizaCliente, deleteCliente } from "../controllers/clienteController.js";

const router = Router();

router.post('/cadastrarCliente', criaCliente);

router.get('/listarClientes', listaAllCliente);

router.get('/listarCliente/:id', listaClienteById);

router.put('/atualizarCliente/:id', atualizaCliente);

router.delete('/removerCliente/:id', deleteCliente);

export default router;