/*
============================================
; Title:  Assignment 7.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   22 September 2019
; Description: Mocha and Chai
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 7.3"));

console.log("");

//START PROGRAM

//Required Modules
var fruits = require("../fruits");

var chai = require("chai");

var assert = chai.assert;

//describe fruits function
describe("fruits", function() {
    it("should return an array of fruits", function() {
       var f = fruits('Apple,Orange,Mango');
       assert(Array.isArray(f));
   });
  });

//END PROGRAM