import 'dotenv/config'

import express from 'express';
import cors from 'cors';

import {con} from './repository/connection.js'

const server = express();

server.use(cors());
server.use(express.json());


server.listen(process.env.PORT,
             () => console.log(`API online na porta ${process.env.PORT}`));