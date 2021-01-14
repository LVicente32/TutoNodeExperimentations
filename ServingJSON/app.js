var http = require('http');
var fs = require('fs');

const server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Leavan',
    job: 'Student',
    age: 25
  };
  res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');
console.log("listening to port 3000");