console.log(SumOfelement([2,3,5,8]));

function SumOfelement(arr){

    count =0;

    for(let i=0; i<arr.length; i++){
        count +=arr[i];
    }
    return count;

}