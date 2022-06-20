var http = require('http');

http.createServer(function(req, res){
    res.write('Hey!');
    res.end();
}).listen(8080);