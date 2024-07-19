 console.log(dublicateElement([2,3,4,5,4,3,5]));

// function dublicateElement(arr){

//     return [...new Set(arr)];
// }



function dublicateElement(arr){
    const uniquelement=[];

    for (let i=0; i<arr.length;i++){

      

        if(uniquelement.indexOf(arr[i])==-1){
        uniquelement.push(arr[i]);
   
}
}
return uniquelement;
    
}