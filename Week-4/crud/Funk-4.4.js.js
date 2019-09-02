/*
============================================
; Title:  Funk-4.4.js
; Author: Professor Krasso
; Modified by: Karie Funk
; Date:   1 Sept 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.4"));

console.log("");

//START PROGRAM

var express = require("express");
var http = require("http");
var logger = require("morgan");

//Created app variable for express
var app = express();

//Specified logger
app.use(logger('dev'));


//Requests using status codes

//GET REQUEST
app.get("/", function(req, response) {
  response.send("GET request successful.");
});

//POST REQUEST
app.post("/", function(req, response) {
  response.send("POST request successful.");
});

//PUT REQUEST
app.put("/", function(req, response) {
  response.send("PUT request successful.");
});

//DELETE REQUEST
app.delete("/", function(req, response) {
  response.send("DELETE request successful.");
});

//Created new server and listen on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});


//END PROGRAM
