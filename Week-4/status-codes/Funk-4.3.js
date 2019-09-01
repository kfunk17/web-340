/*
============================================
; Title:  Assignment 4.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   1 Sept 2019
; Description: HTTP STATUS CODES
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.3"));

console.log("");

//START PROGRAM

//Imports and require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');

//Registered application
var app = express();

//Specified logger
app.use(logger('dev'));

//Requests using status codes

//Get request for 404
app.get('/not-found', function(req, res){
    
    res.status(404);

    res.json({
        error: 'Resource not found.'
    });
});

//Get request for 200
app.get('/ok', function(req, res) {
    
    res.status(200);

    res.json({
        error: 'Page loaded correctly.'
    });
});

//Get request for 501
app.get('/not-implemented', function(req, res){

    res.status(501);

    res.json({
        error: 'Page not implemented.'
    });

});

//Server started and port listening on port 8080
http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on port 8080');
});

//END PROGRAM