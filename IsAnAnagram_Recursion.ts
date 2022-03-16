class AnagramHelper {

    public isAnAnagram(firstWord: string, secondWord: string): boolean {
        throw new Error("Implement me!");
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