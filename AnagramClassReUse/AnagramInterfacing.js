var Anagram = /** @class */ (function () {
    function Anagram() {
    }
    Anagram.prototype.isAnAnagram = function (firstWord, secondWord) {
        var strictFinder = new StrictAnagramFinder();
        var looseFinder = new LooseAnagramFinder();
        console.log("Starting anagram check...\n");
        var isStrictAnagram = strictFinder.isAnAnagram(firstWord, secondWord);
        if (isStrictAnagram) {
            console.log("Is Strict Anagram\n");
            return { isAnagram: true, anagramType: "strict" };
        }
        var isLooseAnagram = looseFinder.isAnAnagram(firstWord, secondWord);
        if (isLooseAnagram) {
            console.log("Is Loose Anagram\n");
            return { isAnagram: true, anagramType: "loose" };
        }
        console.log("Is Not An Anagram\n");
        return { isAnagram: false };
    };
    return Anagram;
}());
var StrictAnagramFinder = /** @class */ (function () {
    function StrictAnagramFinder() {
    }
    //Strict anagrams:
    //  - Have same length
    //  - Have same letters
    //  - Have same case
    StrictAnagramFinder.prototype.isAnAnagram = function (firstWord, secondWord) {
        if (firstWord.length != secondWord.length)
            return false;
        return this.isAnAnagramRecursive(firstWord, secondWord);
    };
    StrictAnagramFinder.prototype.isAnAnagramRecursive = function (firstWord, secondWord) {
        if (firstWord.length == 0) {
            return secondWord.length == 0;
        }
        var firstChar = firstWord.charAt(0);
        var newSecondWord = secondWord.split('').map(function (letter) { return letter == firstChar ? "" : letter; }).join('');
        var newFirstWord = firstWord.split('').map(function (letter) { return letter == firstChar ? "" : letter; }).join('');
        return this.isAnAnagramRecursive(newFirstWord, newSecondWord);
    };
    return StrictAnagramFinder;
}());
var LooseAnagramFinder = /** @class */ (function () {
    function LooseAnagramFinder() {
    }
    //Loose anagram
    //  - Length doesn't matter
    //  - Case doesn't matter
    //  - Has same characters
    LooseAnagramFinder.prototype.isAnAnagram = function (firstWord, secondWord) {
        // Store value of first array comparison to second array
        var firstArrayPassed = this.isWordAnAnagram(firstWord, secondWord);
        // Store value of second array comparison to first array
        var secondArrayPassed = this.isWordAnAnagram(secondWord, firstWord);
        return firstArrayPassed && secondArrayPassed;
    };
    // ***HW: Refactor this function here. Can't remove the split(). Can remove the join().
    // Could remove the class variables, as well || use the class variables instead
    // of parameters.***
    LooseAnagramFinder.prototype.isWordAnAnagram = function (firstWord, secondWord) {
        // Split string by character
        var firstArray = firstWord.toLowerCase().split('');
        var secondArray = secondWord.toLowerCase().split('');
        // Show how the firstWord and secondWord have transformed into arrays
        //console.log(firstArray, secondArray);
        var firstArrayPassed = firstArray.every(function (w) { return secondArray.includes(w); });
        if (firstArrayPassed) {
            // Show if first word passes anagram test through console:
            console.log("Found all letters of " + firstWord + " in " + secondWord + "\n");
        }
        else {
            // Show if first word does not pass anagram test through console:
            console.log("Did not find all letters of " + firstWord + " in " + secondWord + "\n");
        }
        return firstArrayPassed;
    };
    return LooseAnagramFinder;
}());
function anagramTester(word1, word2, expected) {
    var helper = new Anagram();
    var result = helper.isAnAnagram(word1, word2);
    if (result.isAnagram == expected) {
        console.log("Success!\n");
    }
    else
        console.log("Failure!\n");
    if (result.anagramType !== undefined)
        console.log("Anagram type: " + result.anagramType + "\n");
}
anagramTester("act", "cat", true);
anagramTester("Boris", "Doris", false);
anagramTester("pins", "spins", true);
anagramTester("pots", "spots", true);
anagramTester("saint", "satin", true);
anagramTester("chunk", "monk", false);
anagramTester("elephant", "boss", false);
anagramTester("saint", "satin sheet", false);
var helper = new Anagram();
console.log(helper.isAnAnagram("elephant" + "feet", "elephantfeet"));
