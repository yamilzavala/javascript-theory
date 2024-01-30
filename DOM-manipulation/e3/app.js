//setAttibute - getAttribute
const inputRange = document.querySelector('input[type="range"]')
inputRange.setAttribute('min', '70');
console.log(inputRange.getAttribute('max'))
console.log(inputRange.getAttribute('min'))
console.log(inputRange.value)

//finding elements
const firstLi = document.querySelector('li')
firstLi.parentElement; // access to parent 'ul'

//children
const ulEl = document.querySelector('ul')
console.log(ulEl.children[0].innerText); //li

//sibling
const siblingEl = firstLi.nextElementSibling;
console.log(siblingEl.previousElementSibling.innerText)

//iterating throw all elements and chage the content 
const allLis = document.querySelectorAll('li')
for(let item of allLis){
    item.innerHTML = 'new <b>text</b>'
}

//styles
const colors = ['blue','orange','yellow','purple']
for(let i = 0; i < allLis.length; i++){
    allLis[i].style.color = colors[i]
}

const pEl = document.querySelector('p')
pEl.style.background = 'black'
pEl.style.color = 'white'
pEl.style.fontSize = '40px'

//classes
firstLi.classList.toggle('li-remove')
