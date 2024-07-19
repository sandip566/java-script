
console.log( areAnagrams('str','tsr'));

function areAnagrams(str1, str2){

    const sortstr1= str1.split("").sort().join("");
    const sortstr2= str2.split("").sort().join("");

    return sortstr1== sortstr2;
}