/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(a,b){
    // good luck. Add any arguments you deem necessary.
    const aStr = a.toString();
    const bStr = b.toString();
    
    if(aStr.length !== bStr.length) return false;
    
    let aFrequency = {}
    let bFrequency = {}
    
    for (let num of aStr) {
      aFrequency[num] = aFrequency[num] ? aFrequency[num] + 1 : 1;  
    }
    
    for (let num of bStr) {
      bFrequency[num] = bFrequency[num] ? bFrequency[num] + 1 : 1;  
    }
    
    for(let key in aFrequency ){
       if(!(key in bFrequency)) return false; 
       if(bFrequency[key] !== aFrequency[key]) return false; 
    }
    
    return true;
  }