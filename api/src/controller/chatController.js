import {  Router } from 'express'
import { carregarChatsPsicologo, carregarChatsUsuario, criarChat, enviarMensagem, mostrarMensagem, checarChat, carregarNomeUsuario, carregarNomePsic, mostrarUltimaMensagem } from '../repository/chatRepository.js';


const server = Router();

server.post('/chat', async (req, resp) => {
    try {
        const { usuario, psicologo } = req.query;

        const resposta = await criarChat(usuario, psicologo);

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
}) 

server.get('/chat/disponivel', async (req, resp) => {
    try{
        const { usuario, psicologo } = req.query;
        const resposta = await checarChat(usuario, psicologo);
        resp.send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/usuario/mensagem/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await carregarChatsUsuario(id);

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/psicologo/mensagem/:id', async (req, resp) => {
    try {
        const idPsic = Number(req.params.id)
        const mensagens = []
        const resposta = await carregarChatsPsicologo(idPsic);
        const array = resposta
        for(let i = 0; i < resposta.length; i++){
            const ultima = await mostrarUltimaMensagem(resposta[i].idChat);
            mensagens.push(ultima)
        }
        for(let i = 0; i < resposta.length; i++){
            array[i].mensagem = mensagens[i].mensagem;
        }
        resp.send(array)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.post('/chat/mensagem', async (req, resp) => {
    try {
        const { remetente, id, mensagem } = req.body;

        const resposta = await enviarMensagem(remetente, id, mensagem); 
        

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/conversa/mensagem/:id', async (req, resp) => {
    try {
        const idChat = req.params.id;
        const resposta = await mostrarMensagem(idChat)

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/conversa/mensagem/ultima/:id', async (req, resp) => {
    try {
        const idChat = req.params.id;
        const resposta = await mostrarUltimaMensagem(idChat)

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/chat/nome/usuario/:id', async (req, resp) => {
    try{
        const idChat = req.params.id;
        const resposta = await carregarNomeUsuario(idChat)
        resp.send(resposta)
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/chat/nome/psicologo/:id', async (req, resp) => {
    try{
        const idChat = req.params.id;
        const resposta = await carregarNomePsic(idChat)
        resp.send(resposta)
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

export default server;