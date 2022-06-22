import { Router } from "express";
import { criaPedido, listaAllPedido, listaPedidoById, atualizaPedido, deletePedido } from "../controllers/pedidoController.js";

const router = Router();

router.post('/cadastrarPedido', criaPedido);

router.get('/listarPedidos', listaAllPedido);

router.get('/listarPedido/:id', listaPedidoById);

router.put('/atualizarPedido/:id', atualizaPedido);

router.delete('/removerPedido/:id', deletePedido);

export default router;