/*
MergeSort
> in order to implement merge sort, it´s useful to first implement a helper function responsable for mergin two sorted arrays
> given two arrays witch are sorted, the helper function should create a new array witch is also sorted, and cosists off all the elements in the two inputs array.
> helper fn: 
    create an empty array, take a look at the smallest values in each input array
    > if the value in the first array is smaller than the value in the second array, push the value in the first array into out results and move onto the next value in the first array
    > if the value in the first array is larger than the value in the second array, push the value in the second array into out results and move onto the next value in the second array
> merge ([1,10,50], [2,14,99,100])    

> break up the array into halves until you have arrays that are empty or have one element.
> One you have smaller sorted arrays, merge those arrays with other sorted arrays 
  until you are back at the full length of the array.
> One the array has been merged back together, return the merged (and sorted) array   
*/

//HELPER FUNCTION
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    //while both arrays don´t arrive to the end... compare indexes and order them
    while(i < arr1.length && j < arr2.length) {
       if(arr1[i] < arr2[j]) {
        results.push(arr1[i])
        i++;
       } else if(arr1[i] > arr2[j]) {
        results.push(arr2[j])
        j++;
       }
    }
    //if some of the above arrays arrive to the final... 
    //if the fist array did not arrive to the end.. push the values to the rest values
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    //if the second array did not arrive to the end.. push the values to the rest values
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}


//MERGE SORT
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
}

console.log('MergeSort: ', mergeSort([24,10,76,73]))

/*
unsorted array => [24,10,73,76]
                    mergeSort([24,10,76,73])
          
                [24,10]     merge     [76,73]

    [24] merge [10]                       [76] merge [73]

mergeSort([24]) mergeSort([10]) mergeSort([76]) mergeSort([73])
*/

