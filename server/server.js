var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {

  setInterval(function() {
    socket.emit('news', {
      data: 'Hello World.'
    });
  }, 1000);

  socket.on('PostToServer', function(data) {
    console.log('Client message : ', data);
  });

});

app.use(express.static('public'));
app.use(express.static('node_modules'));

server.listen(5001, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
