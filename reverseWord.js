console.log(reverseTheWord("Hello word"));

function reverseTheWord(sentence){
    let words= sentence.split(" ").reverse().join(" ");

    // let reversedWords = words.reverse();

    // let reversedSentence= reversedWords.join(" ");

    return words;
}