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
        const user = req.body;
        
        if(!user.email.trim()) {
            throw new Error('Insira um email!')
        }
        if(!user.senha) {
            throw new Error('Insira uma senha!')
        }
        if(!user.nome.trim()) {
            throw new Error('Insira um nome!')
        }
        if(!user.cpf.trim()) {
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



export default server;
