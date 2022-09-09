/*
    esta funcion hace que el codigo JS corra justo despues de cargar el HTML
    sin esperar al CSS, imagenes o subframes 
*/
window.addEventListener('DOMContentLoaded', () => {

/*
    Hay que crear un array que contenga cada carta, duplicada 2 veces para encontrar el par 
    en el juego.
*/ 

    const cardArray = [
        {
            name: 'cheeseburguer',
            img: 'images/cheeseburger.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name: 'cheeseburguer',
            img: 'images/cheeseburger.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        }
    ];

//  Seleccionamos nuestro grid del dom
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];

//  Creamos nuestro tablero con IMG's del mismo tamaño
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();

//  Una funcion que cheque las similitudes entre cartas

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1]; 
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src','images/blank.png');
            alert('Le diste click a la misma imagen bro');
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert('encontraste un match!');
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            
        }

    }

//  Una funcion que de vuelta a las tarjetas
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosenId.length === 2){
            setTimeout(checkForMatch,0);
        }
    }
});