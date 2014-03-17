module.exports = function(io) {
    io.sockets.on('connection', function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);

      });

      socket.on('postTalk', function(data){
        console.log("some one postTalk:"+data.msg);
        socket.broadcast.emit('someOneTalk',{msg:data.msg});
      })

    });
}