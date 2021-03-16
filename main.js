const check = document.querySelector('.check');
const ball = document.querySelector('.ball');
const gridItems1 = document.querySelectorAll('.grid-items');
const gridItems2 = document.querySelectorAll('.grid-items-2');
const body = document.querySelector('body');
const p = document.querySelectorAll('p');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const lighth1 = document.querySelector('footer h2');



check.addEventListener('click',function(e){
    ball.classList.toggle('move');
    ball.classList.toggle('ball-light');
    check.classList.toggle('toggle-light');
    console.log(e.target)

    gridItems1.forEach(function(item){
        item.classList.toggle('cardBG');
    })
    gridItems2.forEach(function(item){
        item.classList.toggle('cardBG');
    })
    body.classList.toggle('whiteBG');
    h1.forEach(function(h){
        h.classList.toggle('titleText')
    })
    h2.forEach(function(h){
        h.classList.toggle('titleText')
    })
    lighth1.classList.toggle('pText')
    // if(ball.classList.contains('move')){

    // }
})