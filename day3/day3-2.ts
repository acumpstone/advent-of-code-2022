import * as fs from 'fs';

const fileName: string = 'input.txt';
const inputFile = fs.readFileSync(fileName, 'utf8') || null;

if (inputFile) {
    const listOfRucksackContents: string[] = inputFile.split('\r\n', -1);
    var totalItemPriority: number = 0;
    var commonItem: string = '';
    var commonItemPriority: number = 0;
    var groupOfThreeRucksacks: string[] = [];

    for (var i = 0; i < listOfRucksackContents.length; i += 3) {
        // get a group of three rucksacks
        for (var j = 0; j < 3; j++) {
            groupOfThreeRucksacks[j] = listOfRucksackContents[i + j];
        }

        // find the common item type between the 3 rucksacks
        for (var letter of groupOfThreeRucksacks[0]) {
            if (
                groupOfThreeRucksacks[1].includes(letter)
                && groupOfThreeRucksacks[2].includes(letter)
            ) {
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