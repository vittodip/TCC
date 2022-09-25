import { loginVoluntario, cadastroVoluntario } from "../repository/voluntarioRepository.js";

import { Router } from "express";

const server = Router();

server.post('/login/voluntario', async (req, resp) => {
    try {
        const { email, senha } = req.body;
    
        const resposta = await loginVoluntario(email, senha);
    
        if(!resposta)
            throw new Error('Credenciais inválidas!')

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.post('/cadastro/voluntario', async (req, resp) => {
    try {
        const volunt = req.body;

        if(!volunt.email.trim()) {
            throw new Error('Insira um email!')
        }
        if(!volunt.senha) {
            throw new Error('Insira uma senha!')
        }
        if(!volunt.nome.trim()) {
            throw new Error('Insira um nome!')
        }
        if(!volunt.cpf.trim()) {
            throw new Error('Insira um cpf!')
        }
        if(!volunt.nascimento) {
            throw new Error('Insira uma data de Nascimento!')
        }
        if(new Date(volunt.nascimento) >= new Date()) {
            throw new Error('Insira uma data de nascimento válida!')
        }
        if(!volunt.telefone) {
            throw new Error('Insira um telefone!')
        }
        if(!volunt.vagas) {
            throw new Error('Insira a quantidade de vagas que você poderá atender!')
        }
        if(!volunt.crp) {
            throw new Error('Insira seu crp!')
        }

        const resposta = await cadastroVoluntario(volunt);
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;