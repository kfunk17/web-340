/*
=================================================================
; Title:  Assignment 2.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:  19 Aug, 2019
; Description: Creating URL routing functions.
;================================================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 2.3"));

console.log("");


//START PROGRAM


//Below we set up require statement for express library.
var express = require('express');

//Below we set up require statement for express HTTP.
var http = require('http');

//Created local variable for express app.
var app = express();

//Created route interceptors (routes) with function that accepts request and has a response.
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');

});

//Below we created another get request for about page.
app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');
});

//Below we created another get request for contact page. 
app.get('/contact', function(reg, res){
    res.end('Welcome to the contact page.\n');
});

//Below we created another get request for any bad request. 
app.use(function(req, res){
    res.statsCode = 404;
    res.end('404!\n');
});

//Below we created a node sever and listen on a port. 
http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});

//END PROGRAM