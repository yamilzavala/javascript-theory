const btn = document.querySelector('#catchBtn')

btn.addEventListener('mouseover', () => {
  const hight = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.top = `${hight}px`
  btn.style.left = `${width}px`
})

btn.addEventListener('click', () => {
  document.body.style.background = 'green'
})

