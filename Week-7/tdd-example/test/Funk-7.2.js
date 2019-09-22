/*
============================================
; Title:  Assignment 7.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   22 September 2019
; Description: TDD in Action
;===========================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 7.2"));

console.log("");

//START PROGRAM

//Test code
var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

//Function to be tested 
function getFruits(str) {

    return str.split(',');

   }

   module.exports = getFruits;

//END PROGRAM