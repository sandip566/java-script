
console.log(Average([2,4,6,8,10]));

function Average(arr){

    let count=0;

    for(let i=0; i<arr.length;i++){
        count +=arr[i];
    }

let average=count/arr.length;
   return average;

}