var socket = io();

       socket.on('connect', function () {
         console.log('Connect to server');

       });

       socket.on('disconnect', function () {
         console.log('Disconnected from server');
       });

       socket.on('newMessage', function (data) {
         console.log('Simeon says: ', data);
       });