/*
============================================
; Title: EMS APP.JS
; Author: Karie Funk
; Date: 8 September 2019
; Description: This will be an app
; showing employee records.
;===========================================
*/

//REQUIRE STATEMENTS
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();
var mongoose = require('mongoose');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Employees = require('./models/employee');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

//MONGOOSE CONNECT
var mongoDB =
  'mongodb+srv://kfunk_1967:kfunk17@buwebdev-cluster-1-kiwuy.mongodb.net/ems';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});

//INITIALIZE EXPRESS & USE STATEMENTS
var app = express();
app.use(logger('short'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(helmet.xssFilter());
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

//SET & GET STATEMENTS
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

//GET REQUEST TO RENDER HOME PAGE
app.get('/', function(request, response) {
  response.render('index', {
    title: 'HOME',
    message: "home"
  });
});

//GET REQUEST TO RENDER CONTACT PAGE
app.get('/contact', function(request, response) {
  response.render('contact', {
    title: '',
    message: "contact"
  });
});

//GET REQUEST TO RENDER ABOUT PAGE
app.get('/about', function(request, response) {
  response.render('about', {
    title: 'ABOUT',
    message: "about"
  });
});

//GET REQUEST TO RENDER VIEW EMPLOYEE PAGE
app.get('/view', function(request, response) {
  response.render('view', {
    title: 'View of Employees'
  });
});

//GET REQUEST TO RENDER NEW EMPLOYEE PAGE
app.get('/new', function(request, response) {
  response.render('new', {
    title: 'NEW EMPLOYEE',
    message: "new employee"
  });
});

app.get('/list', function(req, res){
  Employees.find({}, function(err, employees){
      if(err){ throw err;
      } else {
      res.render('list', {
          title: 'EMS | Employee List',
          employees: employees
      })
  };
});
});

//POST REQUEST FOR ADDING NEW EMPLOYEE PAGE
app.post('/process', function(req, res) {
  if (!req.body.firstName) {
    res.status(404).send('Entries must have a first name.');
    return;
  } else if (!req.body.lastName) {
    res.status(404).send('Entries must have a last name.');
    return;
  } else if (!req.body.email) {
    res.status(404).send('Entries must have an email.');
    return;
  } else if (!req.body.id) {
    res.status(404).send('Entries must have an employee ID.');
    return;
  }

  //FORM DATA FOR REQUEST
  const firstName = req.body.firstName;
  console.log(firstName);
  const lastName = req.body.lastName;
  console.log(lastName);
  const email = req.body.email;
  console.log(email);
  const ID = req.body.id;
  console.log(ID);

  //CREATED EMPLOYEE MODEL
  let employees = new Employees({
    first: firstName,
    last: lastName,
    email: email,
    ID: ID
  });

  //SAVE
  employees.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

//REDIRECTS USERS TO HOME PAGE
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Employees.find({'first': queryName}, function(err, employees) {
      if(err) {
          console.log(err);
          throw err;
      } else {
          console.log(employees);

          if(employees.length > 0) {
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


//CREATED SERVER AND LISTEN ON A PORT
http.createServer(app).listen(app.get("port"), function() {
  console.log("Application started on port" + app.get("port"));
});