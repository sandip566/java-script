let num =9;
let Prime = true;


if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (num > 1) {

    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            Prime = false;
            break;
        }
    }

    if (Prime) {
        console.log(num,"is a prime number");
    } else {
        console.log(num,"is a not prime number");
    }
}


else {
    console.log("The number is not a prime number.");
}