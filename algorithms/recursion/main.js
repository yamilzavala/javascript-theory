function countDown(num) {
    if(num <= 0) return;
    console.log(num)
    num--;
    countDown(num)
}

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1)
}

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1)
}

function iterativeFactorial(num) {
    let fac = 1;
    for (let index = num; index > 0; index--) {
        fac *= index;         
    }
    return fac;
}

// countDown(2)
// sumRange(3)