const socketIO = require('socket.io');
const httpServer = require("http").createServer();
const express = require('express');
const app = express();
app.use(express.json());

const io = socketIO(httpServer);

io.on('connection', (socket) => {
    console.log('Bir kullanıcı bağlandı: ' + socket.id);
  
    socket.on('disconnect', () => {
      console.log('Bir kullanıcı ayrıldı: ' + socket.id);
    });
  });

app.post('/SendData', (req, res) => {
    req.body;
    res.json(req.body);
    io.sockets.emit("getData", req.body.data)
  });
 
const server = app.listen(3004);
httpServer.listen(3005);

