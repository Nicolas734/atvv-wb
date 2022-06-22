import { Router } from "express";
import {criaServico,listAllServico,atualizaServico,deletaServico,listaServicoById} from "../controllers/servicoController.js"

const router = Router();

router.post ('/cadastrarServico', criaServico);

router.get ('/listarServicos', listAllServico);

router.get ('/listarServico/:id', listaServicoById);

router.put ('/atualizarServico/:id', atualizaServico);

router.delete ('/removerServico/:id', deletaServico);

export default router;

