function fakeRequest(url) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        const pages = {
            '/users': [
                {name: 'yamil', age: 38},
                {name: 'juan', age: 22},
            ],
            '/about': 'About page'
        }
        const data = pages[url];
        if (data) {
            resolve({status: 200, data})
        } else {
            reject({status: 404})
        }
    }, 3000) 
   })
}

fakeRequest('/users')
    .then((resp) => {
        console.log('Status: ', resp.status)
        console.log('Code: ', resp.data)
    })
    .catch(e => console.log('Status: ', e.status))

fakeRequest('/about')
    .then((resp) => {
        console.log('Status: ', resp.status)
        console.log('Code: ', resp.data)
    })
    .catch(e => console.log('Status: ', e.status))

fakeRequest('/others')
    .then((resp) => {
        console.log('Status: ', resp.status)
    })
    .catch(e => {
        console.log('Status: ', e.status)
        console.log('Request failed')
    })

