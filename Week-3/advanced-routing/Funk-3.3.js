/*
============================================
; Title: Assignment 3.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   26 August 2019
; Description: Advanced Routing with EJS
;===========================================
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3.3"));

console.log("");

//START PROGRAM

//Modules
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

//Created app variable
 var app = express();

 //registered views folder
 app.set("views", path.resolve(__dirname, "views"));

 //registered views engine
app.set("view engine", "ejs");

//configured logger 
 app.use(logger("short"));

 //created first git request
 app.get("/:productId", function(request, response) {

    var productId = parseInt(request.params.productId, 10);

     response.render("index", {

        productId: productId

    });

});


//created new server and listen on port 8080
 http.createServer(app).listen(3001, function() {

   console.log("Application started on port 3001");

});

//END PROGRAM