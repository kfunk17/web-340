/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Modified by: Karie Funk
; Date:   Sept 22 2019
; Description: File for the employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
var employeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
  
});

var Employee = mongoose.model("Employee", employeeSchema);

// Export the model so its publicly available.
module.exports = Employee;