/*
============================================
; Title: Assignment 5.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   SEPT 8, 2019
; Description: EJS Templates
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 5.2"));

console.log("");


//START PROGRAM

// requires
var express = require("express");

var http = require("http");

var path = require("path");

//app functions
app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

// local composer array
var composers = [

  "Bach",

  "Mozart",

  "Beethoven",

  "Verdi"

];

// routes
app.get("/", function(request, response) {

    response.render("index", {

        names: composers

    })

});

// created server
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//END PROGRAM