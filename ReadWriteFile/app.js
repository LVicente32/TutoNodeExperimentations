var fs = require('fs');

// fs.readFile('read.txt', 'utf8', function(err, data){
//   console.log(data);
// });

fs.readFile('read.txt', 'utf8', function(err, data){
  fs.writeFile('write.txt', data);
})
// fs.writeFileSync('writeMe.txt', readMe);

// console.log('test');
//PROBLEME

//code