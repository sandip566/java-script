

 console.log(reverseSetring("Sandip shete"));

function reverseSetring(str)
{
  let reversdd="";

 for (let i= str.length; i>=0;i--){

  reversdd += str[i];
 }
 return reversdd;
}

// function reverseSetring(str){

//   return str.split("").reverse().join("")
// }