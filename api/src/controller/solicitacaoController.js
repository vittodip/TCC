import { Router } from "express";   
import { fazerSolicitacao, mostrarSolicitacao } from '../repository/solicitacaoRepository.js';

const server = Router();


// Nova Solicitação
server.post('/solicitacao', async (req, resp) => {

    try {
        const novaSolicitacao = req.body;

        const resposta = await fazerSolicitacao(novaSolicitacao);
        resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

// Mostrar Solicitação
server.get('/mostrar/solicitacao/:id', async (req, resp) => {

    try {
        const mostrarTudo = Number(req.params.id);

        const resposta = await mostrarSolicitacao(mostrarTudo);
        
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

export default server;