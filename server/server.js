const path = require('path');
const http = require('http');
const express = require('express');
var socketIO = require('socket.io');

var app = express();
var server = new http.Server(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('socket out');
  });


  socket.on('createMessage', (data) => {
    console.log('Dostałem nessage: ', data);
    socket.emit('newMessage', data);
  });
});


server.listen(PORT, () => {
    console.log('Server is running');
});