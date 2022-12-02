import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

function compareNumbers(a: number, b: number): number {
    return a - b;
}

if (inputFile) {
    const listOfCalories = inputFile.split('\r\n', -1);

    var currentElfTotal: number = 0;
    var listOfTotals: number[] = [];

    for (const currentCalories of listOfCalories) {
        if (currentCalories !== '') {
            currentElfTotal += Number(currentCalories);
        } else {
            listOfTotals.unshift(currentElfTotal);
            currentElfTotal = 0;
        }
    }

    listOfTotals.sort(compareNumbers);
    listOfTotals.reverse();

    const topThreeTotals: number = listOfTotals[0]
        + listOfTotals[1]
        + listOfTotals[2];

    console.log(topThreeTotals);
}