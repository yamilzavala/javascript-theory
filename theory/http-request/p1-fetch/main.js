//ajax -> asynchronous javascript and xml
//ajaj -> asynchronous javascript and json
//json -> java script object notation
/*
    Node A (client) ------------------------------------ > Node B (server)
                             info(json or xml)
*/
const baseURL = 'https://www.swapi.tech/api/planets';

//fetch pure
fetch('https://swapi.co/api/planetsuy21/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		response.json().then((data) => console.log(data.results))})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});



//async - await
const fetchData = async () => {
    try {
        const resp = await fetch(baseURL);
        if(!resp.ok) {
            console.log(`Status code error: ${resp.status}`)
        }
        //get data from body response
        const data = await resp.json();
        console.log('data - async await: ', data.results)        
    } catch (error) {
        console.log('ERROR - async await:', error)
    }
}

//fetchData()