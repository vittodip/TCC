import { Router } from "express";

import { alterarSenhaPsicologo, alterarSenhaUsuario } from "../repository/senhaRepository.js";


const server = Router();

server.put('/senha/psicologo', async (req, resp) => {
    try {
        const psic = req.body;

        if (!psic.email) {
            throw new Error('Insira seu e-mail!')
        }
        if(!psic.senha) {
            throw new Error ('Insira uma nova senha!')
        }
        let resposta = alterarSenhaPsicologo(psic)
        if(resposta != 1) {
            resposta = alterarSenhaUsuario(psic)
            
            if(resposta !=1) {
                throw new Error('Digite um e-mail válido')
            }
        }
       
        resp.send(resposta)
        

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

export default server;