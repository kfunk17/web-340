/*
=================================================================
; Title:  Assignment 2.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:  19 Aug, 2019
; Description: Hello World with Express 
;================================================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 2.2"));

console.log("");

//START PROGRAM

//Below is require statement for express with library name
var express = require('express');

//Below is require statement for http with library that allows to start server
var http = require('http');

//Below we created placeholder for express app
var app = express();


app.use(function(req, res)
{
    //log message to console that returns value to client that tries to access URL
    console.log("In comes a request to: %s'", req.url);

    res.end("Hello World\n");
})

/*Below we created new server, listen on a port, and then output a message 
that lets the user know when the application has started and what 
port it's listening on*/ 

http.createServer(app).listen(8080, function(){
    console.log('Application started on port %s', 8080);
})

//END PROGRAM