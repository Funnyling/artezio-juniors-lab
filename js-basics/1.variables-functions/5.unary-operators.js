/**
 * @author ntishkevich
 */
var numericValue = -2;
numericValue = +numericValue; // -2
numericValue = -numericValue; // 2
++numericValue; // 3
--numericValue; // 2

var numericString = '3.14';
var pi = +numericString; // 3.14

numericString = '123a';
numericValue = +numericString; // NaN

numericString = '1.2e6';
numericValue = +numericString;

var condition = true;
var result = 10 + condition ? 2 : 3; // ???

var condition = true;
var result = 10 + (condition ? 2 : 3); // ???