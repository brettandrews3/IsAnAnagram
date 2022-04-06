
interface AnagramFinder {
  isAnAnagram(firstWord: string, secondWord: string): boolean;
}


interface AnagramType {
  isAnagram: boolean;
  anagramType?: string;
}

class Anagram {

  public isAnAnagram(firstWord: string, secondWord: string): AnagramType {
    let strictFinder: AnagramFinder = new StrictAnagramFinder();
    let looseFinder: AnagramFinder = new LooseAnagramFinder();
    console.log("Starting anagram check...\n");
    let isStrictAnagram: boolean = strictFinder.isAnAnagram(firstWord, secondWord);
    if (isStrictAnagram) {
      console.log("Is Strict Anagram\n");
      return {isAnagram: true, anagramType: "strict" };
    }

    let isLooseAnagram: boolean = looseFinder.isAnAnagram(firstWord, secondWord);
    if (isLooseAnagram) {
      console.log("Is Loose Anagram\n");
      return {isAnagram: true, anagramType: "loose" };
    }

    console.log("Is Not An Anagram\n");
    return {isAnagram: false};
  }

}

class StrictAnagramFinder implements AnagramFinder {

  //Strict anagrams:
  //  - Have same length
  //  - Have same letters
  //  - Have same case
  public isAnAnagram(firstWord: string, secondWord: string): boolean {
    if (firstWord.length != secondWord.length)
      return false;

    return this.isAnAnagramRecursive(firstWord, secondWord);
  }

  private isAnAnagramRecursive(firstWord: string, secondWord: string): boolean {
    if (firstWord.length == 0) {
      return secondWord.length == 0;
    }

    let firstChar = firstWord.charAt(0);
    let newSecondWord: string = secondWord.split('').map(letter => letter == firstChar ? "" : letter).join('');
    let newFirstWord: string = firstWord.split('').map(letter => letter == firstChar ? "" : letter).join('');

    return this.isAnAnagramRecursive(newFirstWord, newSecondWord);
  }

}

class LooseAnagramFinder implements AnagramFinder {

  //Loose anagram
  //  - Length doesn't matter
  //  - Case doesn't matter
  //  - Has same characters
  public isAnAnagram(firstWord: string, secondWord: string): boolean {
    // Store value of first array comparison to second array
    let firstArrayPassed = this.isWordAnAnagram(firstWord, secondWord);

    // Store value of second array comparison to first array
    let secondArrayPassed = this.isWordAnAnagram(secondWord, firstWord);
       

    return firstArrayPassed && secondArrayPassed;
  }

  // ***HW: Refactor this function here. Can't remove the split(). Can remove the join().
  // Could remove the class variables, as well || use the class variables instead
  // of parameters.***
  private isWordAnAnagram(firstWord: string, secondWord: string): boolean {
    // Split string by character
    const firstArray: string[] = firstWord.toLowerCase().split('');
    const secondArray: string[] = secondWord.toLowerCase().split('');

    // Show how the firstWord and secondWord have transformed into arrays
    //console.log(firstArray, secondArray);

    let firstArrayPassed: boolean = firstArray.every((w) => secondArray.includes(w));

    if (firstArrayPassed) {
      // Show if first word passes anagram test through console:
      console.log("Found all letters of " + firstWord + " in " + secondWord + "\n");
    } else {
      // Show if first word does not pass anagram test through console:
      console.log(
        "Did not find all letters of " + firstWord + " in " + secondWord + "\n"
      );
    }

   return firstArrayPassed;
   
  }
  
}


function anagramTester(word1: string, word2: string, expected: boolean) {
  let helper: Anagram = new Anagram();
  let result: AnagramType = helper.isAnAnagram(word1, word2);

  if (result.isAnagram == expected) { 
    console.log("Success!\n");
  }
  else console.log("Failure!\n");

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

function getWord(): string {
  return "elephantfeet";
}

let helper: Anagram = new Anagram();
console.log(helper.isAnAnagram(getWord() + "feet", 7 + 7 == 14 ? "elephantfeet" : "puppyfeet"));
