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

//Splitting string into array through function
function fruits(str) {
    return str.split(',');
}

//Exports Module
module.exports = fruits;

//END PROGRAM