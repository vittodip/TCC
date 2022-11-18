import { loginAdm, cadastroAdm, listarDenunciasUsuario, listarDenunciasPsicologo, carregarAdmin, PsicologosParaAprovar, aprovarPsicologo, carregarTodosVoluntarios, reprovarPsicologo, aceitarDenunciaUser, recusarDenunciaPsi, recusarDenunciaUser, aceitarDenunciaPsi, listarDenunciasPsicDepoimento } from "../repository/admRepository.js";

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

// reprovar psicólogo

server.delete('/admin/reprovacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await reprovarPsicologo(id);
        
        if (resposta != 1) {
            throw new Error('Não foi possivel reprovar este voluntário!')
        }

        resp.status(202).send()

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







server.delete('/negativo/denuncia/usuario/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await recusarDenunciaUser(id);
        
        if (resposta != 1) {
            throw new Error('Não foi possivel recusar esta Denúncia!')
        }
        
        resp.status(202).send();
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
server.delete('/positivo/denuncia/usuario/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        const resposta = await aceitarDenunciaUser(id);

        if (resposta != 1) {
            throw new Error('Não foi possivel aceitar esta Denúncia!')
        }

        resp.status(202).send()

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/positivo/denuncia/psicologo/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await aceitarDenunciaPsi(id);

        if (resposta != 1) {
            throw new Error('Não foi possivel aceitar esta Denúncia!')
        }

        resp.status(202).send()

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.delete('/negativo/denuncia/psicologo/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await recusarDenunciaPsi(id);

        if (resposta != 1) {
            throw new Error('Não foi possivel recusar esta Denúncia!')
        }

        resp.status(202).send()

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/lista/denuncias/psic', async (req, resp) => {
    try{
        const resposta = await listarDenunciasPsicDepoimento();

        resp.status(200).send(resposta)
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})






















export default server;