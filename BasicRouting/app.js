var http = require('http');
var fs = require('fs');
const { runInNewContext } = require('vm');

const server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url ==='/api/guys'){
    var peoples = [{name: 'tom', age: 24}, {name: 'phil', age: 27}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(peoples));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log("listening to port 3000");