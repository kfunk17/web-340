/*
============================================
; Title: Assignment 5.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   SEPT 8, 2019
; Description: Pug Templates
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 5.3"));

console.log("");


//START PROGRAM


//require
var express = require("express");

var http = require("http");

var path = require("path");

var pug = require("pug");


//Set up express application
var app = express();

//Set up views folder
app.set("views", path.resolve(__dirname, "views"));

//Set up views engine for pug
app.set("view engine", "pug");

//created basic route
app.get("/", function(request, response) {

    response.render("index", {

        message: "Hello, World!"

    });

});

//created server and listen on a port
http.createServer(app).listen(3002, function() {

    console.log("Application started on port 3002!");

});

//END PROGRAM
