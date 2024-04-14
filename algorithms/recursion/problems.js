// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(str){
    let arr = str.split('')    
    function doResursively(arr) {
        if(arr.length === 1) return arr;
        return arr.pop().concat(doResursively(arr))
    }    
    return doResursively(arr)
}

// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str){
    if(str.length < 2) return true        
    if(str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1,-1))
    } else {
        return false;
    }
}

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
function someRecursive(arr, cb){
    if(!arr.length) return false;    
    if(cb(arr[0])) {
        return true;
    }     
    return someRecursive(arr.slice(1), cb)
}

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten(arr){
    let flattenArr = [];
    arr.forEach(item => {
        if(Array.isArray(item)) {
            flattenArr = flattenArr.concat(flatten(item))
        } else {
            flattenArr.push(item)
        }
    })
    return flattenArr;
}

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst (arr) {
    let result = [];
    function doCapitalize(arr) {
      if(!arr.length) return result;
      if(arr.length) {
        result.push(arr[0].charAt(0).toUpperCase().concat(arr[0].slice(1)))
        return doCapitalize(arr.slice(1))
      }
    }
    return doCapitalize(arr);
  }
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum (obj) {
	let sum = 0;
    for(let key in obj){
        if(typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key])
        } else if(obj[key] % 2 === 0) {
            sum += obj[key];
        }   	  
    }
	return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
console.log(nestedEvenSum(obj2))
//nestedEvenSum(obj1); // 6
//nestedEvenSum(obj2); // 10

// object to array
// Write a recursive function called objectToArray. 
function objectToArray (obj) {
	let arr = [];
  for(let key in obj){
    if(typeof obj[key] === 'object') {
    	arr.push(...objectToArray(obj[key]))
    } else {
        arr.push(obj[key])
    }   	  
  }
	return arr;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(objectToArray(obj1))

// flatten array
// Write a recursive function that flatten a nested array 
const nestedArr = [2, [2, [3, [2]]], [[2], "ball", 5], 1, [[2], "car"]];

function doFlattenArray (arr) {
	let flattenArr = [];  
	arr.forEach(el => {
  	if(Array.isArray(el)) {
    	flattenArr.push(...doFlattenArray(el))
    } else {
    	flattenArr.push(el)
    }
  })  
	return flattenArr;
}

console.log(doFlattenArray(nestedArr))

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
function stringifyNumbers (obj) { 
	let newObj = {...obj};
	for(let key in obj) {
   	if(typeof obj[key] === 'number') {
    	newObj[key] = obj[key].toString()
   	} else if((typeof obj[key] === 'object') && !Array.isArray(obj[key])) {    	
   		newObj[key] = stringifyNumbers(obj[key])
   	} else {
    	newObj[key] = obj[key]
    }
  }
  return newObj
}

const numToStringObj = stringifyNumbers(obj);
for(let key in numToStringObj) {
	console.log(key)
}
console.log(numToStringObj)

// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
const obj2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
function collectStrings(obj) {
  let result = [];
  for(let key in obj) {
  	if(typeof obj[key] === 'string') {
    	result.push(obj[key])
    } else if(typeof obj[key] === 'object') {
    	result.push(...collectStrings(obj[key]))
    }
  }
  return result;
}
collectStrings(obj2) // ["foo", "bar", "baz"])


// collect odd number from an array
function collectOddNumbers(arr) {
	let result = [];  
	if(!arr.length) return [];	
  if(arr[0]%2!==0) result.push(arr[0]);
  result.push(...collectOddNumbers(arr.slice(1)))
	return result;
}
console.log(collectOddNumbers([1,4,5,6,7,33,44,56,78,9,2]))