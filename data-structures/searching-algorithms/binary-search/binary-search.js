/*
this function accept a sorted array an a value
create a left pointer at the start of the array, and a right pointer at the end of the array
while the target value is not equal to middle and the left pointer comes before right pointer:
    create a pointer in the middle
    if you find the target you want, return the index
    if the target is too small, move the left pointer up
    if the target is too large, move the right pointer down
if you never find the value, return -1    
*/

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1,2,4,5,6,7,8,19],9))