import { Router } from "express";
import { categoriaSolicitacao, mostrarCategorias, mostrarCategoriasSol } from "../repository/categoriaRepository.js";

const server = Router();

server.get('/categoria', async (req, resp) => {
    try {
        const resposta = await mostrarCategorias();
        
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/categoria/solicitacao', async (req, resp) => {
    try {
        const { solicitacao, categoria } = req.query;
        
        const resposta = await categoriaSolicitacao(solicitacao, categoria);
        
        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/categoria/sol/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        

        const resposta = await mostrarCategoriasSol(id);
        

        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;