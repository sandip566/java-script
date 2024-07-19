

console.log(paindrome("MOM"));

function paindrome(pali){

    let sen="";

    for(let i= pali.length-1; i>=0; i--){

        sen += pali[i];
    }
    if(pali=== sen){
        return("This is the palindrome");
    }
    else{
        return("This is not palindrome");
    }
}

// function paindrome(pali){

//     const palin=pali.split("").reverse().join("");

//     return pali==palin;
// }