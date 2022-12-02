"use strict";
exports.__esModule = true;
var fs = require("fs");
// get input file
var fileName = 'input.txt';
var inputFile = fs.readFileSync(fileName, 'utf8') || null;
if (inputFile) {
    // split string into groups of numbers (i.e. each elf's food stash)
    var listOfCalories = inputFile.split('\r\n', -1);
    // find the highest calorie count for a group of food
    var highestCalories = 0;
    var currentElfTotal = 0;
    for (var _i = 0, listOfCalories_1 = listOfCalories; _i < listOfCalories_1.length; _i++) {
        var currentCalories = listOfCalories_1[_i];
        if (currentCalories !== '') {
            currentElfTotal += Number(currentCalories);
        }
        else {
            (currentElfTotal > highestCalories) && (highestCalories = currentElfTotal);
            currentElfTotal = 0;
        }
    }
    console.log(highestCalories);
}
