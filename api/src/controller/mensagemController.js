import {  Router } from 'express'


const server = Router();


server.post('/mensagem', async (req, resp) => {
    try {
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/mensagem', async (req, resp) => {
    try {
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;