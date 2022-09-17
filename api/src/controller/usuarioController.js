import { cadastroUsuario, loginUsuario } from '../repository/usuarioRepository.js'

import { Router } from "express";


const server = Router();

server.get('/login/usuario', async (req, resp) => {
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
        
        const usuario = req.body;
        
        if(!usuario.email) {
            throw new Error('Insira um email!')
        }
        if(!usuario.senha) {
            throw new Error('Insira uma senha!')
        }
        if(!usuario.nome) {
            throw new Error('Insira um nome!')
        }
        if(!usuario.cpf) {
            throw new Error('Insira um cpf!')
        }
        if(!usuario.nascimento) {
            throw new Error('Insira uma data de Nascimento!')
        }
        if(new Date(usuario.nascimento) >= new Date()) {
            throw new Error('Insira uma data de nascimento válida!')
        }
        if(!usuario.telefone) {
            throw new Error('Insira um telefone!')
        }
        
        const resposta = await cadastroUsuario(usuario);
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



export default server;
