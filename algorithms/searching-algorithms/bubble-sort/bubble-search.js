function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//naive solution
function bubbleSort(arr) {
      for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                //swap
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }      
      }
    return arr;
}
console.log('bubbleSort: ',bubbleSort([37,45,29,8]))

//bubble sort optimized solution
function bubbleSortOptimized(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log('current arr:', arr, 'values: ', arr[j], arr[j+1],'indexs: ', j,  i - 1)
            if(arr[j] > arr[j+1]) {
                //swap
                const temp = arr[j];
                console.log('(SWAP) -', 'arr[j]: ', temp, 'arr[j+1]: ', arr[j+1])
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }     
        console.log('--- ONE PASS COMPLETE ----')  
        if(noSwaps) break; 
    }
    return arr;
}
console.log('bubbleSortOptimized: ',bubbleSortOptimized([37,45,29,8]))

