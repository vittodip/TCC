import { io } from "./scoket.js";


io.on('connection', async (socket) => {;
    socket.on('msg', async (data) => {
        io.emit('msg', 'i');
        
    });
});