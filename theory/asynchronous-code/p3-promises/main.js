/*
Promise is an object representing the eventual completion or failure of an asynchronous operation

Create a promise:
new Promise(resolve, reject) -> resolve and reject are function that you can call whitinh the promise

Status:
A promise has a status: 
                        pending, 
                        resolved, 
                        rejected

Execution methods:
A promise has a .then() method that you can call when the promise is resolved(), and you can execute some code after that.
Too has another method call catch() that you can use when the promise fail
*/

//pending
const willGetYourDog = new Promise((resolve, reject) => {
    //resolve()
})

//resolved
const willGetYourDog2 = new Promise((resolve, reject) => {
    resolve()
})

//rejected
const willGetYourDog3 = new Promise((resolve, reject) => {
    reject()
})

//random Promise
const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.random();
        if (rand < 0.5) {
            resolve()
        } else {
            reject()
        }
    }, 5000)
})
//call the promise
randomPromise
    .then(() => {console.log('Promise executed successfully')})
    .catch((e) => console.error('Error '))

//returning a promise in a function
function somePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve()
            } else {
                reject()
            }
        }, 5000)
    })
}

//call a function that return a promise
somePromise()
    .then(() => console.log('Promise called from a function'))
    .catch(e => console.error('Error function promise'))
