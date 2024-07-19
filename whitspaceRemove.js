const name="Sandip shete";
console.log(removeWhiteSpace(name));

function removeWhiteSpace(str){


    const result=str.replace(/\s/g,"");
    return result;

}