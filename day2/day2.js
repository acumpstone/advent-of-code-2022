"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = 'input.txt';
var inputFile = fs.readFileSync(fileName, 'utf8') || null;
var playValues = {};
playValues.X = 1;
playValues.Y = 2;
playValues.Z = 3;
var getOutcomeScore = function (oppMove, yourMove) {
    // draw
    if (oppMove === "A" && yourMove === "X"
        || oppMove === "B" && yourMove === "Y"
        || oppMove === "C" && yourMove === "Z") {
        return 3;
    }
    // win
    if (oppMove === "A" && yourMove === "Y"
        || oppMove === "B" && yourMove === "Z"
        || oppMove === "C" && yourMove === "X") {
        return 6;
    }
    // lose
    return 0;
};
if (inputFile) {
    var listOfPlays = inputFile.split('\r\n', -1);
    var totalScore = 0;
    var moveScore = 0;
    var outcomeScore = 0;
    for (var _i = 0, listOfPlays_1 = listOfPlays; _i < listOfPlays_1.length; _i++) {
        var round = listOfPlays_1[_i];
        var moves = round.split(' ', 2);
        moveScore = playValues[moves[1]];
        outcomeScore = getOutcomeScore(moves[0], moves[1]);
        totalScore += moveScore + outcomeScore;
    }
    console.log(totalScore);
}
