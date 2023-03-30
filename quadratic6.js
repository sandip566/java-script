
let root1, root2;


let a = 5;
let b = 10;
let c = 25;


let hello = b * b - 4 * a * c;


if (hello> 0) {
    root1 = (-b + Math.sqrt(hello)) / (2 * a);
    root2 = (-b - Math.sqrt(hello)) / (2 * a);

    
    console.log(root1,root2);
}


else if (hello == 0) {
    root1 = root2 = -b / (2 * a);

    
    console.log(root1,root2);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-hello) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}