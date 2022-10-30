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
     <div style="background-color:#fbdcff;padding:10px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <div style="max-width:650px;margin:0 auto">
        <div style="background:#fff;font-size:14pt;color:#686f7a;border-top:4px solid rgb(120, 0, 175);margin-bottom:20px">
        
            <div style="padding:10px 20px;clear:both">
                <div style="font-size:0.8em;line-height:1.5em;border-bottom:1px solid #f2f3f5;padding-bottom:10px;margin-bottom:10px;">
                    <p>
                        <a style="text-decoration:none;color:black">
                            <b>Redefinição de Senha</b>
                        </a>
                    </p>
                    <div style="color:#000">
                        <p style="color:rgb(113, 50, 142)">
                            Oi</b>! <br>
                            <b style="color:#000000;">Para redefinir sua senha, basta seguir o link abaixo:</b> <br>
                            
                        </p>
                        <a href="http://localhost:3000/login/concluir-senha">
                            <button style="color: white; background-color:rgb(113, 50, 142); border: none; border-radius: 20px; padding: 1em; outline: none;"  >Clique aqui!</button>
                        </a>
                        <p style="color:#000">
                            Até logo! =) 
                        </p>
                    </div>
                    <p style="font-size:14px;margin-top:50px;">
                        Atenciosamente,<br>
                        Equipe do Need A Talk. <br>
                        <span style="color:#A52A2A"> ** Este é um e-mail automático, não responda. </span>
                    </p>
                </div>
            </div>
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
