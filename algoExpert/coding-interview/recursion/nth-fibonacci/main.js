// FIBONACCI 
// fib(n) = fib(n-1) + fib(n-2)

//recursive solution
function getNthFib(n) {
    if(n === 2) return 1;
    if(n === 1) return 0;
    return getNthFib(n - 1) + getNthFib(n - 2)
  }
  console.log(getNthFib(6))

/*
                                                                                f(6)
                                                            f(5)                                f(4)   
                                                f(4)                    f(3)             f(3)            f(2)   
                                        f(3)          f(2)         f(2)    f(1)      f(2)    f(1)          1  
                                    f(2)    f(1)       1            1       0         1        0  
                                     1       0   
*/  

//recursive momoize solution
function getNthFib(n, memoize = {1: 0, 2: 1 }) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    
    if(memoize[n]) {
      return memoize[n]
    } else {
      memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
      return memoize[n]
    }
  }


  //iterative solution
  function getNthFib(n) {
    if(n === 1) return 0;
    let valuesArr = [0,1];
    
    for(let i = 2; i < n; i++) {
      let temp = valuesArr[1];
      const next = valuesArr[0] + valuesArr[1];
      valuesArr[0] = temp;
      valuesArr[1] = next;    
    }
    return valuesArr[1]
  }