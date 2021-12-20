let body = document.querySelector('body');
body.style.background = '#a3ffe2';


function cards(color) {
    // let card = document.querySelector('.card');
    let cards = document.querySelectorAll('.card')
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.background = color;
        cards[i].style.boxShadow = '10px 20px 30px blue';
    }

}


