import { cadastroUsuario, loginUsuario, carregarUsuario, alterarUsuario} from '../repository/usuarioRepository.js'

import { Router } from "express";


const server = Router();

server.post('/login/usuario', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await loginUsuario(email, senha);

        if(!resposta)
            throw new Error('Credenciais inválidas!')

        resp.send(resposta);

        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/cadastro/usuario', async (req, resp) => {
    try {
        const user = req.body;
        
        if(!user.email) {
            throw new Error('Insira um email!')
        }
        if(!user.senha) {
            throw new Error('Insira uma senha!')
        }
        if(!user.nome) {
            throw new Error('Insira um nome!')
        }
        if(!user.cpf) {
            throw new Error('Insira um cpf!')
        }
        if(!user.nascimento) {
            throw new Error('Insira uma data de Nascimento!')
        }
        if(new Date(user.nascimento) >= new Date()) {
            throw new Error('Insira uma data de nascimento válida!')
        }
        if(!user.telefone) {
            throw new Error('Insira um telefone!')
        }
        
        const resposta = await cadastroUsuario(user);
        
        resp.send(resposta)
        

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/usuario/:id', async (req, resp) => {
    try {
        const usuario = Number(req.params.id);


        //let horaConsulta = new Date(agendamento.data + 'T' + agendamento.horario);
        //horaConsulta.setHours(horaConsulta.getHours() - horaConsulta.getTimezoneOffset()/60);

        const resposta = await carregarUsuario(usuario);

        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.put('/alterar/usuario/:id', async (req, resp) => {
    try {
        const usuarioId = req.params.id;
        const user = req.body;
        const usuario = await carregarUsuario(usuarioId);
        
        if(user.nome === usuario.nome) {
            throw new Error('Insira um nome diferente do anterior!')
        }
        if(user.email === usuario.email) {
            throw new Error('Insira um email diferente do anterios!')
        }
        if(user.telefone === usuario.telefone) {
            throw new Error('Insira um telefone diferente do anterior!')
        }
        if(!user.email) {
            throw new Error('Insira um email!')
        }
        if(!user.nome) { 
            throw new Error('Insira um nome!')
        }
        if(!user.telefone) {
            throw new Error('Insira um telefone!')
        }
        
        const resposta = await alterarUsuario(user, usuarioId);
        
        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;
