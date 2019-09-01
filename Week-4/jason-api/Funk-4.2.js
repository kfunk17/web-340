/*
============================================
; Title:  Assignment 4.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   1 Sept 2019
; Description: JSON APIs.
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.2"));

console.log("");

//START PROGRAM

var express = require('express');

var http = require('http');

var logger = require('morgan');

//Variable app for express
var app = express();

//Logger to see output of messages in console
app.use(logger('dev'));

//Get request that will return json data
app.get('/customer/:id', function(req,res) {

    var id = parseInt(req.params.id, 10);

    res.json({

        firstName: 'Leo',
        lastName: 'Tolstoy',
        employeeId: id
    });
});

//Created a server and listen on port 3000
http.createServer(app).listen(8080, function(){
    console.log('Application started and listening on port 3000');
});

//END PROGRAM