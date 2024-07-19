
const numbers =[ 5,10,2,8,3,12];

console.log(findSecondlargest(numbers));

function findSecondlargest(arr){
    const sortedArr=arr.sort((a,b)=>b-a);

    let secondLargest=sortedArr[1];

    return secondLargest;
}