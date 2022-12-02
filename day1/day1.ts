import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

if (inputFile) {
    const listOfCalories = inputFile.split('\r\n', -1);

    var highestCalories: number = 0;
    let currentElfTotal: number = 0;

    for (const currentCalories of listOfCalories) {
        if (currentCalories !== '') {
            currentElfTotal += Number(currentCalories);
        } else {
            (currentElfTotal > highestCalories) && (highestCalories = currentElfTotal);
            currentElfTotal = 0;
        }
    }

    console.log(highestCalories);
}