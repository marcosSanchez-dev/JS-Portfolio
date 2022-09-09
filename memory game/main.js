window.addEventListener('DOMContentLoaded', () => {

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
    
    let grid = document.querySelector('.grid');

//  con este condigo randomizas siempre el orden del array
    cardArray.sort(() => 0.5 - Math.random());

    function makeTable() {
        for(let i = 0; i < cardArray.length; i++){
            var images = document.createElement('img');
            images.setAttribute('src','images/blank.png');
            images.setAttribute('data-id',i);
            images.addEventListener('click', flipCard);
            grid.appendChild(images);
        }
    
    }
    makeTable();

    var arrayImgName = [];
    var arrayImgId = [];

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        this.setAttribute('src',cardArray[cardId].img);
        arrayImgId.push(cardId);
        // console.log('arrayImgId:', arrayImgId)
        arrayImgName.push(cardArray[cardId].name);
        // console.log('arrayImgName:', arrayImgName)
        if(arrayImgId.length === 2){
            setTimeout(findMatch,400);
        }
    }

    function findMatch() {
        let imagesDom = document.querySelectorAll('img');
        const optionOneId = arrayImgId[0];
        const optionTwoId = arrayImgId[1];
        if(optionOneId == optionTwoId){
            alert('Presionaste la misma imagen chato');
            imagesDom[optionOneId].setAttribute('src','images/blank.png');
        }else if(arrayImgName[0] === arrayImgName[1]){
            alert('Encontraste un match');
            imagesDom[optionOneId].setAttribute('src','images/blank.png');
            imagesDom[optionTwoId].setAttribute('src','images/blank.png');
            imagesDom[optionOneId].removeEventListener('click',flipCard);
            imagesDom[optionTwoId].removeEventListener('click',flipCard);
        }else{
            alert('Intentalo otra vez compa');
            imagesDom[optionOneId].setAttribute('src','images/blank.png');
            imagesDom[optionTwoId].setAttribute('src','images/blank.png');
        }
    }

});