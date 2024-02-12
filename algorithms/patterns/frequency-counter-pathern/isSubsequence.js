/*
isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(targetStr, str) {
    let formattedStr = str.toLowerCase().replace(/\s/g,'').split('')
    let formattedTargetStr = targetStr.toLowerCase().replace(/\s/g,'').split('')

    let strObj = {}
    let strTargetObj = {}

    for(let val of formattedStr) {
        strObj[val] = strObj[val] ? strObj[val]+1 : 1;
    }

    for(let val of formattedTargetStr) {
        strTargetObj[val] = strTargetObj[val] ? strTargetObj[val]+1 : 1;
    }

    for(let key in strTargetObj){
        if(strObj[key] < strTargetObj[key]) return false;
    }
    return true;
}