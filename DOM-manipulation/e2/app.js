//text content -> show hide text or scripts or console.log
const h1El = document.querySelector('h1')
console.log(h1El.textContent)
h1El.textContent = 'Another text'

//innerText -> ignore hide text or scripts or console.log
console.log(h1El.innerText)
h1El.innerText = 'new text'

//innerHtml
const formEl = document.querySelector('form')
formEl.innerHTML += '<input type="text" placeholder="new input" />'