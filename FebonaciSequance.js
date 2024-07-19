
// var n=10;

// console.log(fibanacciSeries(n));

// function fibanacciSeries(n){
//          var  fibonacci =   [0,1]

//          for(var i=2; i<n; i++){

//             fibonacci[i]= fibonacci[i-1]+ fibonacci[i-2];
//          }
//          return fibonacci;  
// }



let se=10;
let n1=0;
let n2=1;
let next;

for(let i=0; i<=se; i++){
   console.log(n1);
   next=n1+n2;
   n1=n2;
   n2=next;
}