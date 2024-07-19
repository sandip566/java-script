
console.log( findLongestWord("sp is the biggest it industry company in the word"));

function findLongestWord(sent){

    let word= sent.split(" ");

    let longestWord=" ";

    for(let words of word){
        if (words.length> longestWord.length){
            longestWord=words;
        }
    }
    return longestWord;
}