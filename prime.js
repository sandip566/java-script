  console.log(isPrime(5));
  console.log(isPrime(6));
  console.log(isPrime(13));

function isPrime(number){

    for (let i=0; i<=number%2;i++){
     
        if(number%i==0){
            return false;
        }
    }
    return true
}
