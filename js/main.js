"use strict"

// document.body.style.overflow = 'hidden'

// document.addEventListener('click', function(e){
//     if(e.target.closest('.main')){
//         console.log('good')
//     }
// })

let mCont = document.querySelector('.main_content')
let block = document.querySelector('.block')

document.querySelector('.addy').addEventListener('click', function(){
    let a = document.createElement('block')
    a.append('good')
    mCont.append(a)
})