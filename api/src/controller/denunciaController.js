import { Router } from "express";
import { denunciarUsuario, denunciarPsicologo, denunciarUsuarioChat } from "../repository/denunciaRepository.js";


const server = Router();


// denunciar usuario pela solicitação
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


// denunciar psicologo
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

// denunciar usuario pelo chat
server.post('/chatdenuncia/usuario', async (req, resp) => {
    try {
        const denunciaUserChat = req.body;

        if (!denunciaUserChat.depoimento || !denunciaUserChat.depoimento.trim()) {
            throw new Error('Insira algum depoimento!')
        }

        const resposta = await denunciarUsuarioChat(denunciaUserChat);

        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;