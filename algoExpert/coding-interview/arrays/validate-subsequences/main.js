/*

  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.
  
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1,3,4]
   form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4]
   . Note that a single number in an array and the array itself are both valid
  subsequences of the array.  
*/

function isValidSubsequence(array, sequence) {
    let idx = 0;
    for(let i = 0; i < array.length; i++) {
      if(idx === sequence.length) {
        break;
      }
      if(array[i] === sequence[idx] && idx < sequence.length) {
        idx += 1;      
      }
    }
    return idx === sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;