import { Router } from "express";
import { criaProduto,listaAllProduto,atualizaProduto,deletaProduto,listaProdutoByID } from "../controllers/produtoController.js";

const router = Router();

router.post ('/cadastrarProduto', criaProduto);

router.get ('/listarProdutos', listaAllProduto);

router.get ('/listarProduto/:id', listaProdutoByID);

router.put ('/atualizarProduto/:id', atualizaProduto);

router.delete ('/removerProduto/:id', deletaProduto);

export default router;