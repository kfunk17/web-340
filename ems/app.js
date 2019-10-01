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
var Employee = require('./models/employees');
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
app.get('/', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('index', {
        title: 'EMS | Employee Home',
        employees: employees
      })
    }
  });
});
   
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New'
  });
});


app.post('/process', function(req, res) {
  // console.log(request.body.txtName);
  if (!req.body.txtfirstName) {
    res.status(400).send('Entries must have a first name');
    return;
  }
  
  //get the requests form data
  var employeeName = req.body.txtfirstName;
  console.log(employeeName);

  //created a fruit model
  let Employee = new Employee({
    name: employeeName
  });
  
  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

app.get('/view/:queryName', function(req, res) {
  var queryName = req.params['queryName'];

  Employee.find({'name': queryName}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

//created server and listen on a port at 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started and listening on port 8080!");
});