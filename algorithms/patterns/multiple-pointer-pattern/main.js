/*
    create pointers that corresponding to position and move towards beginning, end, midle based on a certain condition.
    order the array for use this pattern
*/

//to do: given an array, find the first two numbers that sum = 0, if do not exist, return undefined

//naive solution
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i]+arr[j] === 0) return [arr[i],arr[j]];
        }
        return undefined;
    }
}
sumZero([-4,-3,-2,-1,0,1,2,4])

//refactor solution with pointers
function sumZeroRefactor(arr) {
    const sortedArr = arr.sort((a,b)=>a-b);
    let left = 0;
    let right = sortedArr.length - 1;
    while (left < right) {
        let sum = arr[left]+arr[right];
        if(sum === 0) return [arr[left],arr[right]];
        if (sum < 0) left++;
        if (sum > 0) right--;
    }
    return undefined;
}
sumZeroRefactor([-4,-3,-2,-1,0,1,2,4])