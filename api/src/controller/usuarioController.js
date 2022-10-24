import { cadastroUsuario, loginUsuario, carregarUsuario, alterarUsuario, deletarUsuario, mostrarUsuarios, mudarSenhaUser} from '../repository/usuarioRepository.js'

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
        
    
        if(!user.email) {
            throw new Error('Insira um e-mail!')
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


server.delete('/usuario/:id', async (req, resp) => {
    try {
        const usuario = Number(req.params.id);

        const resposta = await deletarUsuario(usuario);

        if (resposta != 1) {
            throw new Error('Não foi possivel remover este Usuario!')
        }

        resp.status(202).send();


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/listar/usuario', async (req, resp) => {
    try {
        const resposta = await mostrarUsuarios()
        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.put('/senha/usuario/:id', async (req, resp) =>{

    try {
        const usuarioID = Number(req.params.id);
        const user = req.body;
        
        const usuario = await carregarUsuario(usuarioID);

        if(user.senha === usuario.senha){
            throw new Error('Insira uma senha diferente da anterior')
        }

        const r = await mudarSenhaUser(user, usuarioID)
        resp.status(204).send()

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }


})




export default server;
