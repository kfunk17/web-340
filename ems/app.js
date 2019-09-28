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
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//initialize express
var app = express();

mongoose.connect(mongoDB, {
  useMongoClient: true
});

// setup csrf protection
var csrfProtection = csrf({ cookie: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});

// setup csrf protection

var csrfProtection = csrf({cookie: true});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//use statements
app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

//http calls
app.get("/", function(req, res) {
  res.render("index", {
    title: "Home Page",
    message: "Entry Page"
  });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");
});

//created server and listen on a port at 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});