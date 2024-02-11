/**
 write a function that take a string and returns counts of each character in the string
 */

function isAlphaNumeric(val){
    var code = val.charCodeAt(0)
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //apper alpha (A-Z)
        !(code > 96 && code < 123)   //lower alpha (A-Z)
        ) 
    {
        return false;
    }
    return true;
}

 function countCharacers(str){
    const strFormatted = str.toLowerCase().replace(/\s/g,'');
    let characters = {}
    for(let letter of strFormatted){
        if(isAlphaNumeric(letter)) {
            characters[letter] = characters[letter] ? (characters[letter] + 1) : 1
        }
    }
    return characters;
 }