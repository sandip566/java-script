

 console.log(isOvels("Samiksha"));

// function isOvels(str){
//     const ovels=["a","e","i","o","u"];

//     let count=0;

//     for(let char of str.toLowerCase()){
//         if(ovels.includes(char)){
//             count++
//         }
//     }
//     return count;
// }
function isOvels(str){

    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count++
        }
    }
    return count;
}