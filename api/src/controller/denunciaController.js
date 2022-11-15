import { Router } from "express";
import { denunciarUsuario, denunciarPsicologo, denunciarUsuarioChat, denunciaPerfil, idPsicologoDenuncia, idUsuarioDenuncia } from "../repository/denunciaRepository.js";


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

// denunciar psicologo pelo perfil
server.post('/denunciaperfil/', async (req, resp) => {
    try {
        const denuncia = req.body;

        if (!denuncia.depoimento || !denuncia.depoimento.trim()) {
            throw new Error('Insira algum depoimento!')
        }
        if (!denuncia.nomeUsuario || !denuncia.nomeUsuario.trim()) {
            throw new Error('Insira seu nome de Usuario!')
        }
        if (!denuncia.nomePsicologo || !denuncia.nomePsicologo.trim()) {
            throw new Error('Insira o nome do Psicologo!')
        }
        if (!denuncia.emailUsuario || !denuncia.emailUsuario.trim()) {
            throw new Error('Insira seu email de Usuario!')
        }
        if (!denuncia.emailPsicologo || !denuncia.emailPsicologo.trim()) {
            throw new Error('Insira o email do Psicologo!')
        }

        const idUsuario = await idUsuarioDenuncia(denuncia)
        const idPsicologo = await idPsicologoDenuncia(denuncia);
        const resposta = await denunciaPerfil(denuncia);

        if(!resposta) {
            throw new Error('Deu ruim!')
        }

        resp.send({
            resposta: resposta,
            idPsicologo: idPsicologo,
            idUsuario: idUsuario
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;