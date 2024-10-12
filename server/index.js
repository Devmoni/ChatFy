import http from 'http';
import express from 'express';
import { Server as socketio } from 'socket.io';
import cors from 'cors';

// import { addUser, removeUser, getUser, getUsersInRoom } from './users.js';
import router from './router.js';

const app = express();
const server = http.createServer(app);
const io = new socketio(server);

app.use(router);

io.on('connect',(socket) => {
    console.log('we have a connection');
    socket.on('disconnect',()=>{
        console.log('user has left');
    })
});


server.listen(process.env.PORT || 5000, () => console.log('Server has started.'));
