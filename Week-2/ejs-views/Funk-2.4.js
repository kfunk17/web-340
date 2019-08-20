/*
=================================================================
; Title:  Assignment 2.4
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:  19 Aug, 2019
; Description: EJS views
;================================================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 2.4"));

console.log("");

//START PROGRAM

//require statement for http library
var http = require("http");

//require statement for path library
var path = require("path");

//require statement for express library
var express = require("express");

//local variable for express app
var app = express();

//routes
app.set("views", path.resolve(__dirname, "views")); //tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); //tell Express to use the EJS view engine

app.get("/", function(request, response) {

   response.render("index", {
      //deleted message content and added in own content
      firstName: "Karie",
      lastName: "Funk",
      address: "612 Myrtle Street"

   });

});

//created node server and listen on a port
http.createServer(app).listen(3000, function() {

    console.log("EJS-Views app started on port 3000.");

});

//END PROGRAM

