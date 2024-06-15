

/**
 * @param {number[]} nums
 * @return {number[][]}

Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 

Write a function to return the count of such triplets.

----------------------

Example 1:
Input: nums = [-1, 0, 2, 3], Target = 3
Output://2, there are two options: [-1, 0, 3], [-1, 0, 2]

Input = [-1, 4, 2, 1, 3], Target = 5
//4, There are four triplets whose sum is less than the target: [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

Input = [-2,0,1,3], Target = 2
//2, Because there are two triplets which sums are less than 2: [-2,0,1], [-2,0,3]

Input = [], Target = 0
//0

Input = [0], Target = 0
//0
*/

// fn(target) < k + j + i

/**
 * @param {number[]} nums
 * @return {number[][]}


With a sorted array we ensure that:
-if the sum is greater or equal than target, move end pointer to the left (end--), the sum will be lower and closer to target
-if the sum is less than target, move start to right

Input: sorted = [-1, 0, 2, 3], 
Target = 3

S = Start
C = Current
E = End

x + y + z < target
y + z < target - x

  C  S     E
[-1, 0, 2, 3] => -1  0  3 = 2 < 3 => increment S++; and insert in result; 

*/

 
var tripletWithSmallerSum  = function(array, target) {
  const sortedArr = array.sort((a,b)=>a-b)
  let result = [];
  
  for(let init = 0; init < sortedArr.length; init++) {
    //pointers
    let start = init + 1;
    let end = sortedArr.length - 1;
    
    while(start < end) {
      let currentArr = [sortedArr[init], sortedArr[start], sortedArr[end]]
      let sum = sortedArr[start] + sortedArr[end];

      if(sum < target - init) {
        result.push(currentArr);
        start++;
      } else {
         end--;
      }
    }
  }
  return result.length;
};

// const array = [-1, 1, 2, 3, 4]

// for (let i = 0; i < array.length - 2; i++) {
//   for (let j = i + 1; j < array.length - 1; j++) {
//     for (let k = j + 1; k < array.length; k++) {
//       console.log('array[i]:', array[i])
//       console.log('array[j]:', array[j])
//       console.log('array[k]:', array[k])
//       console.log('sum:', array[i] + array[j] + array[k] )
//       console.log('-----')
//     }
//   }  
// }
