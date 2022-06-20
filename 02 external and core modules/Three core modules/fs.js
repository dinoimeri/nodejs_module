const fs = require('fs');

fs.writeFileSync('write.txt', 'E-mail: dinoimeri@gmail.com, Student at: SEMOS Javascript Academy'); 

var readMe = fs.readFileSync('write.txt', 'utf8');
console.log(readMe); 