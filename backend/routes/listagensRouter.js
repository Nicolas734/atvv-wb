import {Router} from "express";
import {listConsumByAmount, listByGenero, listConsumTotal, listMostConsumByGenero, listMostConsumByValue, listLessConsum} from "../controllers/listagemController.js";

const router = Router();

router.get('/listagemQtd', listConsumByAmount);

router.get('/listagemByGenero/:genero', listByGenero);

router.get('/listagemProdServ', listConsumTotal);

router.get('/listagemGeneroConsumo', listMostConsumByGenero);

router.get('/listagemConsumoValor', listMostConsumByValue);

router.get('/listagemMenorConsumo', listLessConsum)

export default router;