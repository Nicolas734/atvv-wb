import {Router} from "express";
import {listConsumByAmount, listByGenero} from "../controllers/listagemController.js";

const router = Router();

router.get('/listagemQtd', listConsumByAmount);

router.get('/listagemByGenero/:genero', listByGenero);

export default router;