import { loginAdm, cadastroAdm, listarDenunciasUsuario, listarDenunciasPsicologo, carregarAdmin, PsicologosParaAprovar, aprovarPsicologo, carregarTodosVoluntarios } from "../repository/admRepository.js";

import { Router } from "express";

const server = Router();

server.post('/login/adm', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await loginAdm(email, senha);

        if(!resposta)
            throw new Error('Credenciais inválidas!')

        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.post('/cadastro/admin', async (req, resp) => {
    try {
        const admin = req.body;
        
        if(!admin.email) {
            throw new Error('Insira um email!')
        }
        if(!admin.senha) {
            throw new Error('Insira uma senha!')
        }
        if(!admin.nome) {
            throw new Error('Insira um nome!')
        }
        if(!admin.cpf) {
            throw new Error('Insira um cpf!')
        }
        if(!admin.nascimento) {
            throw new Error('Insira sua data de Nascimento!')
        }
        if(new Date(admin.nascimento) >= new Date()) {
            throw new Error('Insira uma data de Nascimento Válida!')
        }
        if(!admin.telefone) {
            throw new Error('Insira um telefone!')
        }
        
        const resposta = await cadastroAdm(admin);
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


// aceitar psicólogo

server.put('/admin/aprovacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);


        const resposta = await aprovarPsicologo(id);
        
        if(!resposta) {
            throw new Error('Não foi possivel aprovar este voluntário!')
        }

        resp.status(202).send(resposta.affectedRows);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


// mostrar psicólogos a serem aprovados

server.get('/admin/voluntario/analise', async (req, resp) => {
    try {
        const resposta = await PsicologosParaAprovar() 
        
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/admin/voluntario', async (req, resp) => {
    try {
        const resposta = await carregarTodosVoluntarios() 
        
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/admin/:id', async (req, resp) => {
    try {
        const admin = Number(req.params.id);
        const resposta = await carregarAdmin(admin);

        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



server.get('/denuncia/usuario', async (req, resp) => {
    try {
        const resposta = await listarDenunciasUsuario();
        resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/denuncia/psicologo', async (req, resp) => {
    try {
        const resposta = await listarDenunciasPsicologo();
        resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;