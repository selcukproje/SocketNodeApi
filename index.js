const socketIO = require('socket.io');
const express = require('express');
const { env } = require('process');
const app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server);

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


io.on('connection', (socket) => {
    console.log('Bir kullanıcı bağlandı: ' + socket.id);
  
    socket.on('disconnect', () => {
      console.log('Bir kullanıcı ayrıldı: ' + socket.id);
    });
  });

app.get('/SendData', (req, res) => {
    req.body;
    res.json(req.body);
    io.sockets.emit("getData", {
      waterQuantity:  req.query.value1,
      totalWaterQuantity:  req.query.value2
    })
  });
 
server.listen(process.env.PORT || 3000);

