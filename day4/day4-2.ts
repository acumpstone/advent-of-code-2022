import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

if (inputFile) {
    const listOfElfPairs: string[] = inputFile.split('\r\n', -1);
    var numOverlaps: number = 0;

    for (const elfPair of listOfElfPairs) {
        // get sections for both elves
        const sections: number[][] = [
            [Number(elfPair.split(',', 2)[0].split('-',2)[0]), 
            Number(elfPair.split(',', 2)[0].split('-',2)[1])],
            [Number(elfPair.split(',', 2)[1].split('-',2)[0]), 
            Number(elfPair.split(',', 2)[1].split('-',2)[1])],
        ];

        // compare if sections overlap at all
        if (
            (sections[0][0] >= sections[1][0] && sections[0][0] <= sections[1][1])
            || (sections[0][1] >= sections[1][0] && sections[0][1] <= sections[1][1])
            || (sections[1][0] >= sections[0][0] && sections[1][0] <= sections[0][1])
            || (sections[1][1] >= sections[0][0] && sections[1][1] <= sections[0][1])
        ) {
            numOverlaps++;
        }
    }
    
    console.log(numOverlaps);
}