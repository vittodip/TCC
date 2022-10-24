import { Router } from "express";
import { consultarProntuario, enviarProntuario, novoProntuario } from "../repository/prontuarioRepository.js";


const server = Router();

server.post('/prontuario', async (req, resp) => {
    try {
        const { idUsuario, idPsicologo } = req.query;

        const resposta = await enviarProntuario(idUsuario, idPsicologo);
    

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.put('/prontuario', async (req, resp) => {
    try {
        const { idUsuario, idPsicologo } = req.query;
        const prontuario = req.body;

        const resposta = await novoProntuario(prontuario, idUsuario, idPsicologo)

        resp.status(202).send()
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/prontuario', async (req, resp) => {
    try {
        const resposta = await consultarProntuario();

        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;