import Router from 'express'
import {marcarConsulta, listarConsulta }from '../repository/consultaRepository.js';

const server = Router();


server.post('/consulta', async (req, resp) => {
   try {
        const { idUsuario, idPsicologo } = req.query;
        const consulta = req.body;

        if (!consulta.data) {
            throw new Error('Insira as informações da consulta!')
        }
        if (!consulta.link) {
            throw new Error('Insira as informações da consulta!')
        }

        const resposta = await marcarConsulta(idUsuario, idPsicologo, consulta);

        resp.send(resposta);
   } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
   }
})

server.get('/consulta' , async (req, resp) => {
    try {
        const resposta = await listarConsulta()
        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})




export default server;