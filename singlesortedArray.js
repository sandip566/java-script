
const array1=[6,7,8,4];
const array2=[5,6,3,2];

console.log(arraySorted(array1, array2));

function arraySorted(array1, array2){

    const single=array1.concat(array2);

    const sorted=single.sort((a,b)=>a-b);

    return sorted;
}