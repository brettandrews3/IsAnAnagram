// messageOne is type message: messagePart array[]
var messageOne = [
    { word: "This", order: 1 },
    { word: "message", order: 4 },
    { word: "is", order: 2 },
    { word: "the", order: 3 }
];
var messageTwo = [
    { word: "big", order: 3 },
    { word: "Elephants", order: 1 },
    { word: "feet", order: 4 },
    { word: "have", order: 2 },
];
var messageThree = [
    { word: "had", order: 2 },
    { word: "Mary", order: 1 },
    { word: "little", order: 4 },
    { word: "a", order: 3 },
    { word: "lamb", order: 5 },
];
function reorderMessage(message) {
    // typeof message: messagePart[]
    // return type: string
    // messagePart.order is 1 based, but arrays are 0 based for indexes.
    var output = "";
    var index = 0;
    var currentlyOutputtedIndex = 1;
    while (currentlyOutputtedIndex < message.length + 1) {
        if (message[index].order == currentlyOutputtedIndex) {
            output += message[index].word;
            currentlyOutputtedIndex++;
            if (currentlyOutputtedIndex < message.length + 1)
                output += " ";
            index = 0;
        }
        index++;
    }
    if (output.slice(message.length - 1) != ".")
        output += ".";
    return output;
}
//newMessage = reorderMessage(messageOne);
console.log(reorderMessage(messageOne));
/*
let output: string = "";
let index = 0;
let currentlyOutputtedIndex = 1;
//messagePart.order is 1 based, but arrays are 0 based for indexes.
while (currentlyOutputtedIndex < messageOne.length + 1) {
    if (messageOne[index].order == currentlyOutputtedIndex) {
        output += messageOne[index].word

        currentlyOutputtedIndex++;

        if (currentlyOutputtedIndex < messageOne.length + 1)
            output += " ";

        index = 0;
    }

    index++;
}

if (output.slice(messageOne.length - 1) != ".")
    output += ".";

console.log(output);
*/ 
