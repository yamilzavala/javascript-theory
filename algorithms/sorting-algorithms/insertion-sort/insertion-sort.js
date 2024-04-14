/*
InsertionSort
> start by picking the second element in the array
> now compare the second element with the one before it and swap if necessary
> continue to the next element and if it is in the incorrect order, iterate thought the sorted portion to place the element in the correct place.
> repeat until the array is sorted 
*/
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log('i: ', i, ', j: ', j)
            arr[j+1] = arr[j]
        }
        console.log('----- ONE PASS -----')
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))


