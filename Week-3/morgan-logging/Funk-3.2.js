/*
============================================
; Title: Assignment 3.2 
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   26 August 2019
; Description: Logging using EJS
;===========================================
*/

//START PROGRAM

//Modules
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3."));

console.log("");

//Variable named app that holds express
var app = express();  

//Views are set in views directory
app.set('views', path.resolve(__dirname, 'views'));

//EJS view engine for the app
app.set('view engine', 'ejs');

//Logger
app.use(logger('short'));
 
//Personalized message to index.ejs
app.get('/', function(req, res){
    res.render('index', {
        message: "Hello, is it me you're looking for?";
    });
});

//Created a sever and listen on port 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started and listening on port %s", 3000);
});

//END PROGRAM