import { Router } from "express";
import { denunciarUsuario, denunciarPsicologo } from "../repository/denunciaRepository.js";


const server = Router();

server.post('/denuncia/usuario', async (req, resp) => {
    try {
        const denunciaUser = req.body;

        const resposta = await denunciarUsuario(denunciaUser);

        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/denuncia/psicologo', async (req, resp) => {
    try {
        const denunciaPsi = req.body;

        if (!denunciaPsi.depoimento || !denunciaPsi.depoimento.trim()) {
            throw new Error('Insira algum depoimento!')
        }

        const resposta = denunciarPsicologo(denunciaPsi);

        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;