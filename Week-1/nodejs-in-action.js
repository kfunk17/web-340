

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 1.5"));

console.log("");

//START PROGRAM

var http = require("http");

function processRequest(req, res) {

//Remade with my own body message
var body = "Hello World, my name is Karie Funk";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

//END PROGRAM

function Song(title,genre){ 
    this.title=title; 
    this.genre=genre;
    };
    
  