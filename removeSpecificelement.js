
console.log(removeElement([1,2,3,4,5],5));

function removeElement(arr, target){

    let fileterdArray=arr.filter (function (element){
        return element !== target;
    });
    return fileterdArray;
}