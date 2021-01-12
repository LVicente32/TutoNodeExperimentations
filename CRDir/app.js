var fs = require('fs');

// fs.unlink('write.txt');
// fs.mkdir('stuff', function(){
//   fs.readFile('read.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data, function(){});
//   })
// });

fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff', function(){});  
})
