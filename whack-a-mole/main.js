
//  seleccionamos nuestros elementos del DOM
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.getElementById('time-left');
let score = document.getElementById('score');

//  inicializamos el juego con el Score en 0
let result = 0;

/*  
Escribimos una funcion que nos de un cuadrado aleatoriamente para 
que ahi este nuestro mole
*/

function randomSquare() {
    square.forEach(item => item.classList.remove('mole'));
    let randomPosition = square[Math.floor(Math.random() * 10)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}


//  si el item al que di click, tiene el id del hitPosition entonces sube el score
square.forEach(item => {
    item.addEventListener('mouseup', () => {
        if(item.id === hitPosition){
            result++;
            score.textContent = result;
        }
    });
});

//  una funcion que mueva al Mole

function moveMole() {
    
}

randomSquare();