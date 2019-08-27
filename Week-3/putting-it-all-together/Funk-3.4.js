/*
============================================
; Title:  Assignment 3.4
; Author: Karie Funk
; Date:   26 August 2019
; Description: Demonstrating our understanding of routing and 
; navigation in an Express application.
===========================================
*/

//START PROGRAM

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3.4"));

console.log("");

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

 //created git requests
app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});


app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

//created new server and listen on port 8080
http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080.");

});

//END PROGRAM 