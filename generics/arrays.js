"use strict";
var ratingsString = [];
var ratingsNumber = [];
ratingsNumber.push(1);
ratingsNumber.push(2);
ratingsNumber.push(3);
ratingsString.push('1');
ratingsString.push('2');
ratingsString.push('3');
var printArray = function (args) {
    args.map(function (item) { return console.log(item); });
    return args;
};
console.log('Printing a array type <number>: \n');
printArray(ratingsNumber);
console.log('\nPrinting a array type <string>: \n');
printArray(ratingsString);
var printArrayOfNumbers = function (args) {
    args.map(function (item) { return console.log(item); });
};
console.log('\nPrinting a array type <number>: \n');
printArrayOfNumbers(ratingsNumber);
