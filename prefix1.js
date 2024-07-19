const strings=["sandip","sagar","satish"];

console.log(longestcommonPrefis(strings));

function longestcommonPrefis(str){

    let prefix =str[0];

    for (let i =1;  i< str.length; i++){

        while(str[i].indexOf(prefix) !==0){
            prefix= prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix;
}