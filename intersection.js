console.log(findIntersection([1,2,3,4],[2,3,4,5,6]));

function findIntersection(arr1,arr2){
    let set = new Set(arr1);

    let intersection = arr2.filter(function (element){
        return set.has(element);
    });

    return intersection;
}