
const inputEl = document.querySelector('#inputEl')
const ulEl = document.querySelector('#ulEl')

//eventListener
inputEl.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    if(!this.value) return;
    //add new item to list
    const text = this.value;
    const liEl = document.createElement('li')
    liEl.innerText = text;
    ulEl.appendChild(liEl);
    this.value = '';
  }
})