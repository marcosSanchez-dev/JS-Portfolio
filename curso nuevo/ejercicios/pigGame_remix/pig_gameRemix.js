'use strict'

var activePlayer,dice,rollDice,currentScore,scores,roundScore;
scores = [0,0];
activePlayer = 0;
roundScore = 0;

//cambiar el numero de dado
dice = document.getElementById('dice');
rollDice = document.getElementById('rollDice');

rollDice.addEventListener('click',function () {
    var random = Math.floor(Math.random()*6)+1 ;
    dice.src='./dice-' + random + '.png';

    if(random != 1){
        roundScore += random;
        document.querySelector('#selfScore' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
});

//BOTON HOLD!

var btnHold = document.getElementById('hold');
btnHold.addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.getElementById('global' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
    
});

//funcion para cambiar de jugador

function nextPlayer() {
    activePlayer === 0 ? activePlayer=1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#selfScore0').textContent = 0;
    document.querySelector('#selfScore1').textContent = 0;
    document.querySelector('.player0box').classList.toggle('active');
    document.querySelector('.player1box').classList.toggle('active');
}
