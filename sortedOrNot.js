console.log(sortedInAssending([6,5,4,3,2,1]));

function sortedInAssending(arr){

    for(let i=1; i<arr.length; i++){

        if(arr[i+1]>arr[i]) {
            return false
        }
    }
    return true
}