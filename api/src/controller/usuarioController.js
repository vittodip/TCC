import { cadastroUsuario, loginUsuario, carregarUsuario, alterarUsuario, deletarUsuario, mostrarUsuarios, mudarSenhaUser} from '../repository/usuarioRepository.js'

import { Router } from "express";

import nodemailer from 'nodemailer'

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

server.get('/email/usuario', async (req, resp) =>{
    try {
        const {email} = req.body;
        const r = await pegarEmailUser(email);
        console.log(r)
        resp.send(r);
        
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

server.post('/enviar-email', async (req, resp) =>{
    let data = req.body;
    const transport = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    secure:process.env.SECURE,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
    })
    
    const message = {
    from: process.env.EMAIL,
     to: data.email,
     subject:'Nat',
     html: `
     <div>
        <h2>Recuperar Senha</h2>
    </div>
     `
     
    }
    transport.sendMail(message, (error, info)=> {
        if (error) {
            return resp.status(400).send('Erro, tente novamente')
        }
        return resp.status(200).send('Email enviado com sucesso!')
    })
})




export default server;
