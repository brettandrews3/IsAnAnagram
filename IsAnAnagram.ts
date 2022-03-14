class AnagramHelper {

    public isAnAnagram(firstWord: string, secondWord: string): boolean {
        /*
        Algorithm confirm that both strings have same letters by comparing 
        first word to second and removing letters that are the same from both words 

        Homework: Finish writing the algorithm. Start using data structures and control flow structures in your algorithm.
          - Remember: You don't have to get all the way there in a single leap. You can do it a piece at a time.
          - Also: Strings are arrays of characters, or at least can be looked at as an array of characters. Arrays are data structures. 
          - You will likely have to use some placeholder variables of some kind, because modifying arrays that you're looping over causes problems. 
          - You can meetup and do some pair programming on your own.
          - (Recursion may make the solution simpler. But if it's confusing, there are other ways. Don't beat yourself up.)
        */
    }
}

function anagramTester(word1: string, word2: string, expected: boolean) {
    let helper: AnagramHelper = new AnagramHelper();
    
    if (helper.isAnAnagram(word1, word2) == expected)
        console.log("Success!\n");
    else
        console.log("Failure!\n");    
}

anagramTester("act", "cat", true);
anagramTester("Boris", "Doris", false);
anagramTester("pins", "spins", true);
anagramTester("pots", "spots", true);
anagramTester("saint", "satin", true);
anagramTester("chunk", "monk", false);
anagramTester("elephant", "boss", false);
anagramTester("saint", "satin sheet", false);