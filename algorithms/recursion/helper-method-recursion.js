/*
    pathern: 
    - define a wraper function
    - define a variable / arr / object
    - difine a inside recursive function that handle the wraper variable 
    - return the variable

    function outer(input){
        let outerScopeVariable = []
        function helper(helperInput){       
            helper(helperInput--);
        }
        helper(input)
        return outerScopeVariable;
    }

    for arrays use methods slice, spread and concat that not mutate the original array
*/

function getOddsNumbers(arr){
    let result = []

    function recursiveOddsNumbers(input) {
        if(input.length === 0) return;
        if(input[0] % 2 !== 0) result.push(input[0])
        recursiveOddsNumbers(input.slice(1))
    }

    recursiveOddsNumbers(arr);
    return result;
}

//in in comparison with helpers methods, exist pure recursion
function pureRecursionGetOddsNumbers(arr) {
    let newArr = []
    if(arr.length === 0) return;
    if(arr[0] % 2 !== 0) newArr.push(arr[0]);
    newArr = newArr.concat(recursiveOddsNumbers(arr.slice(1)))
    return newArr;
}