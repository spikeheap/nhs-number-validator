"use strict";

exports.validate = validate;

function validate(nhsNumber){
  // pre-flight checks
  if(
    nhsNumber === undefined ||
    nhsNumber === null ||
    isNaN(Number(nhsNumber)) ||
    nhsNumber.toString().length !== 10
  ){
    return false;
  }

  // convert numbers to strings, for internal consistency
  if(Number.isInteger(nhsNumber)){
    nhsNumber = nhsNumber.toString();
  }

  // Step 1: Multiply each of the first 9 numbers by (11 - position indexed from 1)
  // Step 2: Add the results together
  // Step 3: Divide the total by 11 to get the remainder
  var nhsNumberAsArray = nhsNumber.split('');
  var remainder = nhsNumberAsArray.slice(0,9)
                            .map(multiplyByPosition)
                            .reduce(addTogether, 0) % 11;

  var checkDigit = 11 - remainder;

  // replace 11 for 0
  if(checkDigit === 11){
    checkDigit = 0;
  }

  var providedCheckDigit = nhsNumberAsArray[9];

  // Do the check digits match?
  return checkDigit === Number(providedCheckDigit);
}

function multiplyByPosition(value, index) {
  // multiple each digit by 11  minus its position (indexed from 1)
  return value * (11 - (index+1));
}

function addTogether(previousValue, currentValue){
  return previousValue + currentValue;
}
