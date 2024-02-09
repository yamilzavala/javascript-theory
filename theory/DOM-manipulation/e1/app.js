const myImg = document.createElement('img')
myImg.src = 'https://images.unsplash.com/photo-1613226505855-999302e0c08d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
myImg.style.width = '250px'
document.body.append(myImg)

const allElement = document.body.children;

setInterval(() => {
    for(let el of allElement) {
        el.style.transition = 'all 2s'
        const x = Math.floor(document.body.clientWidth * Math.random())
        const y = Math.floor(document.body.clientHeight * Math.random())
        el.style.transform = `translate(${x}px,${y}px)`
    }

},2000)

//getById
const imgBear = document.getElementById('bear-photo')
imgBear.style.border = 'solid 1px blue'

//getByTagName
const pEls = document.getElementsByTagName('p')
for(let i of pEls) {
    i.style.background = 'gray'
}

//get byClassName
const ulEl = document.getElementsByTagName('ul')[0]
const liEls = ulEl.getElementsByClassName('special')
for(let i of liEls) {
    i.style.color = 'red'
}

//get byQuerySelector
//tag
const h1El = document.querySelector('h1')
h1El.style.color = 'orange'

//class
const pEl = document.querySelector('p.class-test')
pEl.style.color = 'green'

//id
const inpEl = document.querySelector('#inp3')
inpEl.style.color = 'pink'

//type
const inpPass = document.querySelector('input[type="password"]')
inpPass.style.border = '2px solid blue'