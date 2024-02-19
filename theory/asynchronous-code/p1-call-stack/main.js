const repeat = (str, times) => {
    let result = '';
    for (let index = 0; index < times; index++) {
        result += str;        
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + '!!!';
}

const getText = (phrase) => { 
    let text = scream(phrase);
    return repeat(text, 5);
}

const makeText = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getText(phrase);
    el.appendChild(h1)
}

makeText('hi there', document.body)