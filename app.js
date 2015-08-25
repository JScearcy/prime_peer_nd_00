//Pull in our modules built, along with the http module
var randomNumber = require('./randomNumber');
var convertNumber = require('./convertNumber');
var http = require('http');
//Create the server, which listens for a request and responds with the random bank account information using two functions from the module
http.createServer(function(req, res){
    res.writeHead(200);
    res.write('Account Balance: \n' + convertNumber(randomNumber(100, 1000000)) + '\n');
    res.end();
}).listen(3000);
