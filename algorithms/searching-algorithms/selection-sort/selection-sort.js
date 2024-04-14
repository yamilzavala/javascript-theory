/*
SelectionSort
> store the first element as a smallest value you have seen so far.
> compare this item with the next item in the array until you find the smaller number
> is a smaller value is found, designate that smaller number to be the new minimum number and cotinue to the end of the array.
> if the minimum is not the value (index) you initially began with, swap the two values  
> repeat this with the next element until the array is sorted  
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
           console.log('i: ',i, ' j: ', j)
           if(arr[j] < arr[lowest]) {
             lowest = j;
           }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;            
        }
        console.log('--- ONE PASS COMPLETE ----') 
    }
    return arr;
}
console.log(selectionSort([45,10,29,8]))
// [45,29,10,8] i = 0, j = 1, lowest = 0 => i = 0, j = 1, lowest = 1
// [45,29,10,8] i = 0, j = 2, lowest = 1
// [45,29,10,8] i = 0, j = 3, lowest = 1 => i = 0, j = 3, lowest = 3
// ONE PASS COMPLETE

// [8,29,10,45] i = 1, j = 2, lowest = 1 =>  i = 1, j = 2, lowest = 2
// [8,29,10,45] i = 1, j = 3, lowest = 2 
// ONE PASS COMPLETE

// [8,29,10,45] i = 2, j = 3, lowest = 2 
// ONE PASS COMPLETE

// [8,29,10,45] i = 3, j = 4, lowest = 3 
// ONE PASS COMPLETE

// return [8,10,29,45] 
