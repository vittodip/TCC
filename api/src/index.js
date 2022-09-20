import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import voluntarioController from './controller/voluntarioController.js'
import admController from './controller/admController.js'
import solicitacaoController from './controller/solicitacaoController.js'

import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

server.use(usuarioController);
server.use(voluntarioController);
server.use(admController);
server.use(solicitacaoController);


server.listen(process.env.PORT,
             () => console.log(`API online na porta ${process.env.PORT}`));