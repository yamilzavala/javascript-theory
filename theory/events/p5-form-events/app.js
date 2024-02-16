//selectors
const creditCard = document.querySelector('#creditCard')
const terms = document.querySelector('#terms')
const veggie = document.querySelector('#veggie')

const form = document.querySelector('#form')

const formData = {}
//add event listeners in each field and keep traking values in an object
for(let field of [creditCard, terms, veggie]) {
	field.addEventListener('input', ({target}) => {
		const {value, name, type, checked} = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData)
	})
}


//prevent default
form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('SUBMITTED')
})