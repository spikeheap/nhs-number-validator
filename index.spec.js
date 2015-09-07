"use strict";

var validator = require('./index');

var validNumberExamples = [
  // add specific examples to test here
];

var invalidNumberExamples = [
  // add specific examples to test here
  "0"
];

var ZERO_TO_NINE = [0,1,2,3,4,5,6,7,8,9];

// The number of samples to take for each position
// Value between 1 and 10
// Note that this slows down a LOT for values > 6
var numbersToSample = 2;

// generate some sample valid and invalid numbers.
// NOTE: this isn't seeded, so you'll want to record the number in any failure messages
// to allow it to be reproduced manually.
// this isn't a world-class method for generating permutations
randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number1) {
  randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number2) {
    randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number3) {
      randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number4) {
        randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number5) {
          randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number6) {
            randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number7) {
              randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number8) {
                randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number9) {
                  var multipliedTotal = number1*10 + number2*9 + number3*8 + number4*7 + number5*6 + number6*5 + number7*4 + number8*3 + number9*2;
                  var remainder = multipliedTotal % 11;
                  if(remainder == 10){
                    invalidNumberExamples.push([number1, number2, number3, number4, number5, number6, number7, number8, number9, 11-remainder].join(''));
                  }else{
                    validNumberExamples.push([number1, number2, number3, number4, number5, number6, number7, number8, number9, 11-remainder].join(''));
                  }
                });
              });
            });
          });
        });
      });
    });
  });
});

console.log('Sample data generated:')
console.log(validNumberExamples.length + ' valid samples');
console.log(invalidNumberExamples.length + ' invalid samples');


describe("validating valid numbers", function() {
  validNumberExamples.forEach(function (validNumber) {
    it("returns TRUE for" + validNumber, function() {
      expect(validator.validate(validNumber)).toBe(true);
    });
  });

  it("validates numbers wrapped in strings", function () {
    expect(validator.validate("2983396363")).toBe(true);
  });

  it("validates numbers represented as integers", function () {
    expect(validator.validate(2983396339)).toBe(true);
  });
});

describe("validating invalid numbers", function() {
  invalidNumberExamples.forEach(function (invalidNumber) {
    it("returns FALSE for " + invalidNumber, function() {
      expect(validator.validate(invalidNumber)).toBe(false);
    });
  });

  it("returns FALSE for the empty string", function () {
    expect(validator.validate("")).toBe(false);
  });

  it("returns FALSE for undefined", function () {
    expect(validator.validate()).toBe(false);
  });

  it("returns FALSE for null", function () {
    expect(validator.validate(null)).toBe(false);
  });

  it("returns FALSE for 0", function () {
    expect(validator.validate("0")).toBe(false);
  });

  it("returns FALSE for non-number strings", function () {
    expect(validator.validate("a string")).toBe(false);
  });
});

// private helper functions
function randomSlice(array, sliceLength) {
  return shuffle(array).slice(0, sliceLength);
}

// Fisher-Yates shuffle, from somewhere on Stack Overflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
