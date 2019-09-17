/*
============================================
; Title: EMS APP.JS
; Author: Karie Funk
; Date: 8 September 2019
; Description: This will be an app
; showing employee records.
;===========================================
*/

//requirements 
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger('short'));

app.get("/", function(req, res) {
  res.render("index", {
    title: "Home Page",
  });
});

//created server and listen on a port at 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});