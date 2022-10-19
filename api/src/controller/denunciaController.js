import { Router } from "express";
import { denunciarUsuario } from "../repository/denunciaRepository.js";


const server = Router();

server.post('/denuncia/usuario', async (req, resp) => {
    try {
        const denuncia = req.body;

        if (!denuncia.depoimento || !denuncia.depoimento.trim()) {
            throw new Error('Insira algum depoimento!')
        }
        
        const resposta =  await denunciarUsuario(denuncia);

        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;