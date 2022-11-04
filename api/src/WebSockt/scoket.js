import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';


const server = express();
server.use(express.json());
server.use(cors());


const serverHttp = new http.createServer(server);

const io = new Server( serverHttp, {
    cors:{ 
        origin: ['http://localhost:3000']
    }
} );


export { server, io, serverHttp }

