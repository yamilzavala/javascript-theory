const colors = [
  'green', 'blue', 'red', 'yellow', 'black', 'purple'
]

const container = document.querySelector('#container');
const h1El = document.querySelector('h1')

const changeColor = (el) => {
  h1El.style.color = el.style.backgroundColor;
}

const createBoxes = () => {
  for(let color of colors) {
    const divEl = document.createElement('div');
    divEl.classList.add('box')
    divEl.style.backgroundColor = color;
    container?.appendChild(divEl);
    divEl.addEventListener('click', () => {
      changeColor(divEl)
    } )
  }
}

createBoxes()
