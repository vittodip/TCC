import { io } from "./scoket.js";
import { mostrarMensagem }from '../repository/chatRepository.js'


io.on('connection', async (socket) => {;
    socket.on('msg', async (data) => {
        try{
            const x = await mostrarMensagem(data);
            io.emit('msg', x);
        }
        catch(err){
            io.emit('msg', 'Ocorreu um erro, tente novamente mais tarde.')
        }
        
    });
});