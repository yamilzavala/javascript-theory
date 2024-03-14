//async in front of the function trasform in a promise
async function sum(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers'
    }
    return x + y
}
sum('a',2)
    .then(val => console.log(val))
    .catch(err => console.log('Error: ', err))


//with promises
function sumPromise(x,y) {
   return new Promise((resolve,reject) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        reject('x and y must be numbers')
    }
    resolve(x+y)
   })
}
sumPromise('a', 2)
    .then(val => console.log(val))
    .catch(err => console.log('Error Promise: ', err))



//without async await
const getData = () => {
    return axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  }
getData()
    .then(val => console.log(val))
    .catch(err => console.log('Error Promise get data: ', err))

//with async await
const getDataValues = async () => {
    try {
        const data = await axios
          .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        console.log(data)        
    } catch (error) {
        console.error(error)   
    }
}
getDataValues()