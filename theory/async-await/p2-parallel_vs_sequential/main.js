//SEQUENCIAL REQUEST - first execute one requeest - then the following requests
const getPoke = async () => {
    try {
        const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
        const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')        
        const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3') 
        console.log(poke1.data)
        console.log(poke2.data)
        console.log(poke3.data)
    } catch (error) {
        console.error('Fetch error..', error)
    }
}
getPoke()

//PARALLEL REQUEST - all request execute at same time
const getPokeParallel = async () => {
    try {
        const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
        const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')        
        const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3') 
        console.log(prom1)
        const poke1 = await prom1;
        const poke2 = await prom2;
        const poke3 = await prom3;
        console.log(prom1)
        console.log(poke1.data)
        console.log(poke2.data)
        console.log(poke3.data)
    } catch (error) {
        console.error('Fetch error..', error)
    }
}
getPokeParallel()

//Promise all
const getPokePromiseAll = async () => {
    try {
        const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
        const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')        
        const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3') 
       
        const result = await Promise.all([prom1,prom2,prom3]);
        console.log('Promise all: ', result)
    } catch (error) {
        console.error('Fetch error..', error)
    }
}
getPokePromiseAll()




//change body color sequencial
function changeBodyColor (color, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve()
        },delay)
    })
}
async function callChangeColor() {
    await changeBodyColor('red', 1000)
    await changeBodyColor('blue', 1000)
    await changeBodyColor('orange', 1000)
    await changeBodyColor('yellow', 1000)
    await changeBodyColor('green', 1000)
} 
callChangeColor()


//change body color parallel
async function callChangeColor() {
    const prom1 = changeBodyColor('red', 1000)
    const prom2 =  changeBodyColor('blue', 1000)
    const prom3 =  changeBodyColor('orange', 1000)
    const prom4 =  changeBodyColor('yellow', 1000)
    const prom5 =  changeBodyColor('green', 1000)
    await prom1;
    await prom2;
    await prom3;
    await prom4;
    await prom5;
} 
callChangeColor()