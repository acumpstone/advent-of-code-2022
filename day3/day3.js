import * as fs from 'fs';
const fileName = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;
if (inputFile) {
    const listOfRucksackContents = inputFile.split('\r\n', -1);
    var totalItemPriority = 0;
    var sackHalfLength = 0;
    var sackCompartments = [];
    var commonItem = '';
    var commonItemPriority = 0;
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
        }
        else {
            commonItemPriority = commonItem.charCodeAt(0) - 38;
        }
        totalItemPriority += commonItemPriority;
    }
    console.log(totalItemPriority);
}
