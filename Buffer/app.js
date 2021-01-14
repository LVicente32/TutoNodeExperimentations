const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log('new chunk received: ');
  console.log(chunk);
});

/*
const server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello');
});

server.listen(3000, '127.0.0.1');
console.log("listening to port 3000");
*/