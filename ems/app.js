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
var helmet = require("helmet");
var mongoose = require('mongoose');
var Employee = require('./models/employee');
var mongoDB = 'mongodb+srv://kfunk_1967:kfunk17@buwebdev-cluster-1-kiwuy.mongodb.net/ems';

//initialize express
var app = express();

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//use statements
app.use(logger('short'));
app.use(helmet.xssFilter());

//http calls
app.get("/", function(req, res) {
  res.render("index", {
    title: "Home Page",
  });
});

//created server and listen on a port at 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});