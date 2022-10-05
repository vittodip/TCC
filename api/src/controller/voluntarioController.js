
import { loginVoluntario, cadastroVoluntario, carregarVoluntario, alterarVoluntario } from "../repository/voluntarioRepository.js";


import { Router } from "express";

const server = Router();

server.post('/login/voluntario', async (req, resp) => {
    try {
        const { email, senha } = req.body;
    
        const resposta = await loginVoluntario(email, senha);
    
        if(!resposta)
            throw new Error('Credenciais inválidas!')

        if(resposta.situacao === null)
            throw new Error('Cadastro em análise!')

        resp.send(resposta);
        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


server.post('/cadastro/voluntario', async (req, resp) => {
    try {
        const volunt = req.body;

        if(!volunt.email) {
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


server.get('/voluntario/:id', async (req, resp) => {
    try {
        const voluntario = Number(req.params.id);

        const resposta = await carregarVoluntario(voluntario);
        resp.send(resposta);
    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }})


    
server.put('/alterar/voluntario/:id', async (req, resp) => {
    try {
        const voluntarioId = req.params.id;
        const volunt = req.body;

        const voluntario = await carregarVoluntario(voluntarioId);

        
        if(volunt.nome === voluntario.nome) {
            throw new Error('Insira um nome diferente do anterior!')
        }
        if(volunt.email == voluntario.email) {
            throw new Error('Insira um email diferente do anterios!')
        }
        if(volunt.telefone === voluntario.telefone) {
            throw new Error('Insira um telefone diferente do anterior!')
        }
        if(!volunt.email.trim()) {
            throw new Error('Insira um email!')
        }
        if(!volunt.nome.trim()) {
            throw new Error('Insira um nome!')
        }
        if(!volunt.telefone) {
            throw new Error('Insira um telefone!')
        }

        
        const r = await alterarVoluntario(volunt, voluntarioId);
        resp.send(r);

    } catch (err) {

        resp.status(404).send({
            erro: err.message
        })
    }
})





export default server;