import { Router } from "express";   
import { aceitarSolicitacao, alterarSolicitacao, deletarSolicitacao, inserirSolicitacao, listarSoliciPsicologo, listarSolicitacao, mostrarTodasSolicitações } from '../repository/solicitacaoRepository.js';

const server = Router();


// Nova Solicitação
server.post('/solicitacao', async (req, resp) => {

    try {
        const novaSolicitacao = req.body;

        if (!novaSolicitacao){
            throw new Error("Não foi possível inserir Solicitação.")
        }
        if (!novaSolicitacao.assunto){
            throw new Error("Não foi possível inserir Solicitação.")
        }

        const resposta = await inserirSolicitacao(novaSolicitacao);
        resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

// Mostrar Solicitação
server.get('/solicitacao/:id', async (req, resp) => {

    try {
        const mostrarTudo = Number(req.params.id);

        const resposta = await listarSolicitacao(mostrarTudo);
            
        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})


server.get('/solicitacao/psicologo/:id', async (req, resp) => {
    try {
        const solicitacao = Number(req.params.id);

        const resposta = await listarSoliciPsicologo(solicitacao);
        
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.put('/solicitacao/:id' , async (req, resp) => {
    try {
        const solicitacaoId = Number(req.params.id);
        const solicitacao = req.body;

        const resposta = await alterarSolicitacao(solicitacao, solicitacaoId);

        /*if (solicitacaoId.id != undefined) {
            throw new Error("Não existe Solicitação para ser alterada.")
        }*/
        
        if (!solicitacao){
            throw new Error("Não foi possível alterar Solicitação.")
        }
        if (resposta != 1) {
            throw new Error("Não foi possível alterar Solicitação.")
        }

        resp.status(202).send()
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.put('/solicitacao', async (req, resp) => {
    try {
        const ids = req.body;


        const resposta = await aceitarSolicitacao(ids);
        
        if(!resposta) {
            throw new Error('Não foi possivel aceitar essa Solicitação!')
        }

        resp.status(202).send(resposta.affectedRows);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.delete('/solicitacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await deletarSolicitacao(id);

        if (resposta != 1) {
            throw new Error("Solicitação não pode ser removida")
        }
        resp.status(204).send();
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/solicitacao', async (req, resp) => {
    try {
        const resposta = await mostrarTodasSolicitações() 
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;