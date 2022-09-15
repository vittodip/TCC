import { loginVoluntario } from "../repository/voluntarioRepository.js";

import { Router } from "express";

const server = Router();

server.post('/login/voluntario', async (req, resp) => {
    try {
        const { email, senha } = req.body;
    
        const resposta = await loginVoluntario(email, senha);
    
        if(!email || !senha)
            throw new Error('Credenciais inválidas!')

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;