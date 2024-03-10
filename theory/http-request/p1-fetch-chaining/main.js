
// fetch('https://www.swapi.tech/api/planets')
// 	.then((response) => {
// 		if (!response.ok)
// 			throw new Error(`Status Code Error: ${response.status}`);

// 		return response.json()
//     })
//     .then((data) => {
//         const planet1 = data.results[0];
//         return fetch(planet1.url)
//     })
//     .then((resp) => {
//         if (!resp.ok)
// 			throw new Error(`Status Code Error: ${response.status}`);

//         return resp.json()     
//     })
//     .then(data => console.log(data.result))   
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});


//REFACTOR
const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://www.swapi.tech/api/planets') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
