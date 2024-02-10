//to do: given an array, find the uniques vales

function countUniquesValues(arr) {
    if(!arr.length) return 0;
    let lookup = {};
    for(let val of arr){
        lookup[val] = lookup[val] ? lookup[val] + 1 : 0;
    }
    return Object.keys(lookup).length;
}

//with pointers
//refactor solution with pointers
function countUniquesValuesPointers(arr) {
    if(!arr.length) return 0;
    const sortedArr = arr.sort((a,b)=>a-b);
    let left = 0;
    let right = left + 1;
    let uniques = [arr[left]];
    while (right < sortedArr.length) {
        let equals = arr[left] === arr[right];
        if(equals) right++;
        if (!equals) {
            uniques.push(arr[right])
            left = right;
            right++;
        };
    }
    return uniques.length;
}
                                
countUniquesValuesPointers([1,2,3,2,3,4])

//refactor 2 solution with pointers
function countUniquesValuesPointers2(arr) {
    if(!arr.length) return 0;
    const sortedArr = arr.sort((a,b)=>a-b);
    let uniques = [sortedArr[0]]
    let i = sortedArr[0];
    for (let j = 1; j < sortedArr.length; j++) {
        if(i !== sortedArr[j]){
            uniques.push(sortedArr[j])
            i = arr[j];
        }
    }
    return uniques.length;
}
                                