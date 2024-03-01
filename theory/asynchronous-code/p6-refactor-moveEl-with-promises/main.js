//BAD - we must use promises to solve this
// const moveElement = (el, amount, delay, callback) => {
//     //cocument width 
//     const docWidth = document.body.clientWidth; 
//     const currentRight = el.getBoundingClientRect().right;
//     const currentLeft = el.getBoundingClientRect().left;

//     if (currentRight + amount > docWidth) {
//         console.log('DONE');
//         setTimeout(() => {
//             el.style.transform = `translateX(${0}px)`;  
//             if(callback) callback();      
//         }, delay)  
//     } else {
//         setTimeout(() => {
//             el.style.transform = `translateX(${currentLeft + amount}px)`;  
//             if(callback) callback();      
//         }, delay)    
//     }
// }

// moveElement(btn, 100, 1000, () => {
//     moveElement(btn, 100, 1000, () => {
//         moveElement(btn, 100, 1000, () => {
//             moveElement(btn, 100, 1000, () => {
//                 moveElement(btn, 1000, 1000, () => {
//                     moveElement(btn, 100, 1000, () => {
//                         moveElement(btn, 100, 1000)
//                     })
//                 })
//             })
//         })
//     })
// })

const btn = document.querySelector('#btn1');

function moveElement (el, amount, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const docWidth = document.body.clientWidth; 
            const currentRight = el.getBoundingClientRect().right;
            const currentLeft = el.getBoundingClientRect().left;

            const longer = currentRight + amount > docWidth;
            if (longer) {
                reject({status: 400, message: 'Limit Exceeded'}) 
            } else {
                el.style.transform = `translateX(${currentLeft + amount}px)`;
                resolve({status: 200, message: 'Move success'})
            }
        }, delay)
    })
}

moveElement(btn, 100, 3000)
    .then((res) => {
        console.log(res)
        return moveElement(btn, 1000, 3000)
    })
    .then((res) => {
        console.log(res)
        return moveElement(btn, 1000, 3000)
    })
    .then((res) => {
        console.log(res)
        return moveElement(btn, 1000, 3000)
    })
    .then((res) => {
        console.log(res)
    })
    .catch(e => console.log('Error failed: ', e))

//OR this way
// moveElement(btn, 100, 3000)
//     .then(() => moveElement(btn, 1000, 3000))
//     .then(() => moveElement(btn, 1000, 3000))
//     .then(() => moveElement(btn, 1000, 3000))
//     .then()
//     .catch(e => console.log('Error failed: ', e))



