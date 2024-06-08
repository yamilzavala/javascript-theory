function isPalindrome(text) {
    const original = text.split('');
    const originalReverse = text.split('').reverse();
    
    for(let i = 0; i < original.length; i++) {
        if(original[i] !== originalReverse[i]) return false 
    }
    return true;  
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  