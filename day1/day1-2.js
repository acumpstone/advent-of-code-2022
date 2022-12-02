"use strict";
exports.__esModule = true;
var fs = require("fs");
// get input file
var fileName = 'input.txt';
var inputFile = fs.readFileSync(fileName, 'utf8') || null;
function compareNumbers(a, b) {
    return a - b;
}
if (inputFile) {
    // split string into groups of numbers (i.e. each elf's food stash)
    var listOfCalories = inputFile.split('\r\n', -1);
    var currentElfTotal = 0;
    var listOfTotals = [];
    for (var _i = 0, listOfCalories_1 = listOfCalories; _i < listOfCalories_1.length; _i++) {
        var currentCalories = listOfCalories_1[_i];
        if (currentCalories !== '') {
            currentElfTotal += Number(currentCalories);
        }
        else {
            listOfTotals.unshift(currentElfTotal);
            currentElfTotal = 0;
        }
    }
    listOfTotals.sort(compareNumbers);
    listOfTotals.reverse();
    var topThreeTotals = listOfTotals[0]
        + listOfTotals[1]
        + listOfTotals[2];
    console.log(topThreeTotals);
}
