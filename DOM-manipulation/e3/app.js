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

//creating elements
const newH2 = document.createElement('h2')
newH2.innerText = 'Im new'
newH2.classList.add('special')
const sec = document.querySelector('section');
sec.appendChild(newH2)

const newImg = document.createElement('img');
newImg.src = 'https://images.pexels.com/photos/19845816/pexels-photo-19845816/free-photo-of-aerial-view-of-a-river-with-snow-on-the-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
document.body.appendChild(newImg)
newImg.style.width = '200px'
newImg.style.height = '200px'

const newLink = document.createElement('a')
newLink.innerText = 'go img'
newLink.href = 'https://images.pexels.com/photos/19845816/pexels-photo-19845816/free-photo-of-aerial-view-of-a-river-with-snow-on-the-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
sec.appendChild(newLink)

const newLi = document.createElement('li')
newLi.innerText = 'New li';
ulEl.insertBefore(newLi, ulEl.firstChild)

const newI = document.createElement('i')
newI.innerText = 'New italic'
pEl.prepend(newI, newLink)

const liElremoveMe = document.querySelector('ul li.target-class')
liElremoveMe.remove();

const firslsLiToRemove = document.querySelector('ul li');
ulEl.removeChild(firslsLiToRemove)