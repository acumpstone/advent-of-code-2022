import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

var playValues: { [move: string]: number } = {};
playValues.X = 1;
playValues.Y = 2;
playValues.Z = 3;

const getOutcomeScore = function (oppMove: string, yourMove: string): number {
    // draw
    if (
        oppMove === "A" && yourMove === "X"
        || oppMove === "B" && yourMove === "Y"
        || oppMove === "C" && yourMove === "Z"
    ) { return 3; }

    // win
    if (
        oppMove === "A" && yourMove === "Y"
        || oppMove === "B" && yourMove === "Z"
        || oppMove === "C" && yourMove === "X"
    ) { return 6; }

    // lose
    return 0;
};

if (inputFile) {
    const listOfPlays: string[] = inputFile.split('\r\n', -1);
    var totalScore: number = 0;
    var moveScore: number = 0;
    var outcomeScore: number = 0;

    for (const round of listOfPlays) {
        const moves: string[] = round.split(' ', 2);

        moveScore = playValues[moves[1]];
        outcomeScore = getOutcomeScore(moves[0], moves[1]);
        totalScore += moveScore + outcomeScore;   
    }
    
    console.log(totalScore);
}