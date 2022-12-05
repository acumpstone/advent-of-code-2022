import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

if (inputFile) {
    const listOfRucksackContents: string[] = inputFile.split('\r\n', -1);
    var totalItemPriority: number = 0;
    var sackHalfLength: number = 0;
    var sackCompartments: string[] = [];
    var commonItem: string = '';
    var commonItemPriority: number = 0;

    for (const sack of listOfRucksackContents) {
        // split the rucksack in halfsies
        sackHalfLength = sack.length / 2;
        sackCompartments = [sack.slice(0, sackHalfLength), sack.slice(sackHalfLength)];

        // compare the halves and find the common item type
        for (var letter of sackCompartments[0]) {
            if (sackCompartments[1].includes(letter)) {
                commonItem = letter;
                 break;
            }
        }

        // convert the common item type to its priority
        if (commonItem === commonItem.toLowerCase()) {
            commonItemPriority = commonItem.charCodeAt(0) - 96;
        } else {
            commonItemPriority = commonItem.charCodeAt(0) - 38;
        }

        totalItemPriority += commonItemPriority;
    }
    
    console.log(totalItemPriority);
}