/*
  Pattern that help you compare two arrays
  build two object and then compare the keys and the frequencies (values)
  if the frequencies are the same and if all the arra1´s keys exist in array2 
*/

//to do: search if each item in arr1 exist in arr2 and arr1 has the same frequency that arr2

//naive solution
export const fn = (a,b) => {
    if(a.length !== b.length) return false;
      for(let i = 0; i < a.length; i++){
          let idx = b.indexOf(a[i]**2) 
        if(idx === -1) {
         return false;
        }
        b.splice(idx,1);   
      }
       return true;
}
console.log(fn([1,2,3,2],[9,1,4,4]))


//refactor solution
export const fnRefactor = (a,b) => {
    if(a.length !== b.length) return false;

    let frequency1 = {}
    let frequency2 = {}

    for(let val of a) {
      frequency1[val] = (frequency1[val] || 0) + 1;
    }
    for(let val of b) {
      frequency2[val] = (frequency2[val] || 0) + 1;
    }
    console.log(frequency1)
    console.log(frequency2)
    
    for (const key in frequency1) {
      if (!(key**2 in frequency2)) return false;
      if (frequency2[key**2] !== frequency1[key]) return false;
    }
  return true;
}
    
console.log(fnRefactor([1,2,3,2],[9,1,4,4]))