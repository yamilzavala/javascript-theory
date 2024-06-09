/*
power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    let result = base;
    if(exp === 0) return 1;
    result *= power(base, exp-1) 
    return result;
}

// 2 a la 2 = 2 * 2
// (2,2) => 2 * 2
//     (2,1) => 2
//         (2,0) => 1