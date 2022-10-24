import { Router } from "express";


const server = Router();

server.post('/prontuario', async (req, resp) => {
    try {
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/prontuario', async (req, resp) => {
    try {
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;