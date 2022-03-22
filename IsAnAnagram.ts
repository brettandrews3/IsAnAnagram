class AnagramHelper {
  private isFirstWordAnAnagramOfSecondWord(firstArray: string[], secondArray: string[]): boolean {
    // HOMEWORK: refactor and use function within isAnAnagram (encapsulation)
     let firstArrayPassed = true;
    if (firstArray.every((w) => secondArray.includes(w))) {
      // Show if first word passes anagram test through console
      console.log("Found all letters of " + firstWord + " in " + secondWord);
    } else {
      firstArrayPassed = false;
      // Show if first word does not pass anagram test through console
      console.log(
        "Did not find all letters of " + firstWord + " in " + secondWord
      );
    }

  }
  public isAnAnagram(firstWord: string, secondWord: string): boolean {
    
    /*
        Algorithm confirm that both strings have same letters by comparing 
        first word to second and removing letters that are the same from both words 

        HOMEWORK: Finish writing the algorithm. Start using data structures and control flow structures in your algorithm.
          - Remember: You don't have to get all the way there in a single leap. You can do it a piece at a time.
          - Also: Strings are arrays of characters, or at least can be looked at as an array of characters. Arrays are data structures. 
          - You will likely have to use some placeholder variables of some kind, because modifying arrays that you're looping over causes problems. 
          - You can meetup and do some pair programming on your own.
          - (Recursion may make the solution simpler. But if it's confusing, there are other ways. Don't beat yourself up.)
        */

    // Split string by character
    const firstArray = firstWord.split('');
    const secondArray = secondWord.split('');

    // Show how the firstword and secondword have transformed into arrays
    console.log(firstArray, secondArray);

    // Store value of first array comparison to second array
    let firstArrayPassed = true;
    if (firstArray.every((w) => secondArray.includes(w))) {
      // Show if first word passes anagram test through console
      console.log("Found all letters of " + firstWord + " in " + secondWord);
    } else {
      firstArrayPassed = false;
      // Show if first word does not pass anagram test through console
      console.log(
        "Did not find all letters of " + firstWord + " in " + secondWord
      );
    }

    // Store value of second array comparison to first aray
    let secondArrayPassed = true;
    if (secondArray.every((w) => firstArray.includes(w))) {
      //Show if second word passes anagram test through console
      console.log("Found all letters of " + secondWord + " in " + firstWord);
    } else {
      secondArrayPassed = false;
      // Show if second word does not pass anagram test through console
      console.log(
        "Did not find all letters of " + secondWord + " in " + firstWord
      );
    }
    

    return firstArrayPassed && secondArrayPassed;

      
  } 
}

function anagramTester(word1: string, word2: string, expected: boolean) {
  let helper: AnagramHelper = new AnagramHelper();

  if (helper.isAnAnagram(word1, word2) == expected) console.log("Success!\n");
  else console.log("Failure!\n");
}

anagramTester("act", "cat", true);
anagramTester("Boris", "Doris", false);
anagramTester("pins", "spins", true);
anagramTester("pots", "spots", true);
anagramTester("saint", "satin", true);
anagramTester("chunk", "monk", false);
anagramTester("elephant", "boss", false);
anagramTester("saint", "satin sheet", false);

/*
My thoughts on this problem:
We've got firstWord and secondWord. Both need to be fed into arrays like so:

const firstArray = firstWord.slice();
const secondArray = secondWord.slice();

From here, we need a function that reads through each value in firstArray and runs
a find() against secondArray. This would knock out the first match each time. We'd
need to remove the matched value from secondArray with each loop. If all of firstArray's
values found a match in secondArray, isAnAnagram could return true.

This doesn't cover factors like one array having more values than the other, but the tests
don't consider that, either. That's where I'm at right now.
*/
