const btn = document.querySelector('#btn');

//BAD
//callback hell - DON´t DO THIS
// setTimeout(() => {
//     btn.style.transform = `translateX(100px);`
//     setTimeout(() => {
//         btn.style.transform = `translateX(100px);`
//         setTimeout(() => {
//             btn.style.transform = `translateX(100px);`
//             setTimeout(() => {
//                 btn.style.transform = `translateX(100px);`
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(100px);`
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);


//BAD - we must use promises to solve this
//refactor
const moveElement = (el, amount, delay, callback) => {
    //cocument width 
    const docWidth = document.body.clientWidth; 
    const currentRight = el.getBoundingClientRect().right;
    const currentLeft = el.getBoundingClientRect().left;

    if (currentRight + amount > docWidth) {
        console.log('DONE');
        setTimeout(() => {
            el.style.transform = `translateX(${0}px)`;  
            if(callback) callback();      
        }, delay)  
    } else {
        setTimeout(() => {
            el.style.transform = `translateX(${currentLeft + amount}px)`;  
            if(callback) callback();      
        }, delay)    
    }

}

moveElement(btn, 100, 1000, () => {
    moveElement(btn, 100, 1000, () => {
        moveElement(btn, 100, 1000, () => {
            moveElement(btn, 100, 1000, () => {
                moveElement(btn, 1000, 1000, () => {
                    moveElement(btn, 100, 1000, () => {
                        moveElement(btn, 100, 1000)
                    })
                })
            })
        })
    })
})



