import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

var outcomeValues: { [outcome: string]: number } = {};
outcomeValues.X = 0;
outcomeValues.Y = 3;
outcomeValues.Z = 6;

const getMoveValue = function (oppMove: string, outcome: string): number {
    // rock
    if (
        oppMove === "A" && outcome === "Y"
        || oppMove === "B" && outcome === "X"
        || oppMove === "C" && outcome === "Z"
    ) { return 1; }

    // paper
    if (
        oppMove === "A" && outcome === "Z"
        || oppMove === "B" && outcome === "Y"
        || oppMove === "C" && outcome === "X"
    ) { return 2; }

    // scissors
    return 3;
};

if (inputFile) {
    const listOfPlays: string[] = inputFile.split('\r\n', -1);
    var totalScore: number = 0;
    var moveScore: number = 0;
    var outcomeScore: number = 0;

    for (const round of listOfPlays) {
        const moves: string[] = round.split(' ', 2);

        outcomeScore = outcomeValues[moves[1]];
        moveScore = getMoveValue(moves[0], moves[1]);
        totalScore += moveScore + outcomeScore;   
    }
    
    console.log(totalScore);
}