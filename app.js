var randomNumber = require('./randomNumber');
var convertNumber = require('./convertNumber');
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write('Account Balance: \n' + convertNumber(randomNumber(100, 1000000)) + '\n');
    res.end();
}).listen(3000);
