/*
============================================
; Title: Assignment 6.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   SEPT 14, 2019
; Description: Mongoose
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 6.3"));

console.log("");

//START PROGRAM

//require statements

var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

//specified database connection
var mongoDB = 'mongodb+srv://kfunk_1967:kfunk17@buwebdev-cluster-1-kiwuy.mongodb.net/ems';

//created connection
mongoose.connect(mongoDB, {

  useMongoClient: true

});

mongoose.Promise = global.Promise;

//created database variable to hold connection
var db = mongoose.connection;

//general error handling
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
   console.log("Application connected to mLab MongoDB instance");
});

var app = express();
app.use(logger('dev'));

//Started server and listen on a port
http.createServer(app).listen(1000, function(){
    console.log("Application started and listening on port 1000!");
});

//END PROGRAM