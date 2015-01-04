var server = require('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
    console.log('socket connected');
    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });
    setInterval(function(){
      socket.emit('ready', {'date': new Date()});
    }, 3000);
});

server.listen(3333);
