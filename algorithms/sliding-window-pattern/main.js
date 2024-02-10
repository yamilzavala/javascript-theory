/*
    this pattern involves create a window witch can be an array or a number that move from one position to another
    depending certain condition the window increases, close o create a one one
    uses with string or arrays
*/

//to do: write a function that acceps an array of number and a number called n. The function should calculate the maximun sum of n consecutive elements in the array

//naive solution
function maxSubArraySum (arr, n) {
    if(arr.length < n) return null;

    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i+j];            
        }
        if(temp > max) max = temp;        
    }
    return max;
}                           
maxSubArraySum([2,6,9,2,1,8,5,6,3],3)

//refactor
function maxSubArraySumRefactor (arr, n) {
    if(arr.length < n) return null;
    let temp = 0;
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
      temp += arr[i]
    }
    max = temp;
    for (let i = n; i < arr.length; i++) {       
        temp = temp - arr[i - n] + arr[i]
        max = Math.max(temp, max);
    }
    return max;
}                           
maxSubArraySum([2,6,9,2,1,8,5,6,3],3)

                        