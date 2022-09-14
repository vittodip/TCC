import 'dotenv/config'

import express from 'express';
import cors from 'cors';

import loginUsuario from './repository/usuarioRepository.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use(loginUsuario);


server.listen(process.env.PORT,
             () => console.log(`API online na porta ${process.env.PORT}`));