function fakeRequest(url) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        const pages = {
            '/users': [
                {id: 1, name: 'yamil'},
                {id: 2, name: 'juan'},
            ],
            '/user/1':  {id: 1, name: 'yamil', age: 38, city: 'cordoba', topPostId: 454321},
            '/user/2':  {id: 2, name: 'juan', age: 22, city: 'baires'},
            '/posts/454321': {id: 454321, title: 'Some famous post...'}
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

//BAD
// fakeRequest('/users')
//     .then((resp) => {
//         console.log(resp)
//         const id = resp.data[0].id;
//         fakeRequest(`/user/${id}`).then((resp) => {
//             console.log(resp)
//             const postId = resp.data.topPostId;
//             fakeRequest(`/posts/${postId}`).then((resp) => {
//                 console.log(resp)
//             })
//         })        
//     })
//     .catch(e => console.log('Ohhh failed: ', e.status))


//GOOD
fakeRequest('/users')
    .then((resp) => {
        console.log(resp)
        const id = resp.data[0].id;
        return  fakeRequest(`/user/${id}`)      
    })
    .then((resp) => {
        console.log(resp)
        const postId = resp.data.topPostId;
        return fakeRequest(`/posts/${postId}`)
    }) 
    .then((resp) => {
        console.log(resp)
    }) 
    .catch(e => console.log('Ohhh failed: ', e.status))