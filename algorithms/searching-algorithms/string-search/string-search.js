/*
  loop over the longer string
  loop over the shorter string
  if the character dont match, break out the inner loop
  if the character do match, keep going
  if you complete the inner loop and find a match, increment the count of matches
  return the count
*/

function searchString(long, short){
    let counter = 0;
   for (let i = 0; i < long.length; i++) {
       for (let j = 0; j < short.length; j++) {        
        console.log(short[j], long[i+j])
        if(short[j] !== long[i+j]){
            console.log('BREAK')
            break;
        } 
        if(j === short.length -1) {
            counter += 1;
        }        
       }
   }
   return counter;
}

console.log(searchString('hello there threr', 'er'))
