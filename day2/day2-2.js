"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = 'input.txt';
var inputFile = fs.readFileSync(fileName, 'utf8') || null;
var outcomeValues = {};
outcomeValues.X = 0;
outcomeValues.Y = 3;
outcomeValues.Z = 6;
var getMoveValue = function (oppMove, outcome) {
    // rock
    if (oppMove === "A" && outcome === "Y"
        || oppMove === "B" && outcome === "X"
        || oppMove === "C" && outcome === "Z") {
        return 1;
    }
    // paper
    if (oppMove === "A" && outcome === "Z"
        || oppMove === "B" && outcome === "Y"
        || oppMove === "C" && outcome === "X") {
        return 2;
    }
    // scissors
    return 3;
};
if (inputFile) {
    var listOfPlays = inputFile.split('\r\n', -1);
    var totalScore = 0;
    var moveScore = 0;
    var outcomeScore = 0;
    for (var _i = 0, listOfPlays_1 = listOfPlays; _i < listOfPlays_1.length; _i++) {
        var round = listOfPlays_1[_i];
        var moves = round.split(' ', 2);
        outcomeScore = outcomeValues[moves[1]];
        moveScore = getMoveValue(moves[0], moves[1]);
        totalScore += moveScore + outcomeScore;
    }
    console.log(totalScore);
}
