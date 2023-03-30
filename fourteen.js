let lowerNum = 2;
let higherNum = 100;

console.log(lowerNum,higherNum);


for (let i = lowerNum; i <= higherNum; i++) {
    let may = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            may = 1;
            break;
        }
    }

    
    if (i > 1 && may == 0) {
        console.log(i);
    }
}