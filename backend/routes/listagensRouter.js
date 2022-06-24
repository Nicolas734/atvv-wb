import {Router} from "express";
import {listConsumByAmount, listByGenero, listConsumTotal, listMostConsumByGenero, listMostConsumByValue, listLessConsum} from "../controllers/listagemController.js";

const router = Router();

    // 1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
router.get('/listagemQtd', listConsumByAmount);

    // 2. Listagem de todos os clientes por gênero.
router.get('/listagemByGenero/:genero', listByGenero);

    // 3. Listagem geral dos serviços ou produtos mais consumidos.
router.get('/listagemProdServ', listConsumTotal);

    // 4. Listagem dos serviços ou produtos mais consumidos por gênero.
router.get('/listagemGeneroConsumo', listMostConsumByGenero);

    // 5. Listagem dos 10 clientes que menos consumiram produtos ou serviços.
router.get('/listagemConsumoValor', listMostConsumByValue);

    //6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
router.get('/listagemMenorConsumo', listLessConsum)

export default router;