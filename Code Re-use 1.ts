interface messagePart {
    // Each word/order pair is an object
    word: string;
    order: number;
}

// messageOne is type message: messagePart array[]
let messageOne: messagePart[] = [
    {word: "This", order: 1}, 
    {word: "message", order: 4},
    {word: "is", order: 2},
    {word: "the", order: 3}
];

let messageTwo: messagePart[] = [
    {word: "big", order: 3}, 
    {word: "Elephants", order: 1}, 
    {word: "feet", order: 4}, 
    {word: "have", order: 2}, 
];

let messageThree: messagePart[] = [
    {word: "had", order: 2}, 
    {word: "Mary", order: 1}, 
    {word: "little", order: 4}, 
    {word: "a", order: 3}, 
    {word: "lamb", order: 5}, 
];

function reorderMessage(message: messagePart[]): string {
    // typeof message: messagePart[]
    // return type: string
    // messagePart.order is 1 based, but arrays are 0 based for indexes.
    let output: string = "";
    let index = 0;
    let currentlyOutputtedIndex = 1;
    
    while (currentlyOutputtedIndex < message.length + 1) {
        if (message[index].order == currentlyOutputtedIndex) {
            output += message[index].word

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
console.log(reorderMessage(messageTwo));
console.log(reorderMessage(messageThree));

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