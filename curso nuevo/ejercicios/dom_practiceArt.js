'use strict'
//Bola roja
var redBall = document.querySelector('.red');
redBall.innerHTML = "bola roja";
redBall.style.backgroundColor = "red";

//bola azul
var divs = document.getElementsByTagName("div");
divs[1].style.backgroundColor = "blue";

//bola verde

var greenBall = document.querySelector('.green');
var h1 = document.createElement("h1");
var text = document.createTextNode('green Ball');
h1.appendChild(text);
greenBall.appendChild(h1);
greenBall.style.fontSize = "0.6em";
greenBall.style.backgroundColor = "green";

//lista

var lista = document.querySelector('.lista');
var newItem = document.createElement('li');
var itemText = document.createTextNode('4');
newItem.appendChild(itemText);

lista.insertBefore(newItem,lista.firstChild);
var hijo = lista.getElementsByTagName('li')[2]; //elimine el #2 de la lista
lista.removeChild(hijo);

// animacion
var animatedBall = document.querySelector('#box');
var pos = 0;
var time = setInterval(move,10);

function move() {
    if(pos >= 150){
        pos = 0;
    }else{
        pos++;
        animatedBall.style.left = pos + "px";
    }
}

// bolas moradas

var purpleBall = document.createElement("div");
purpleBall.style.background = "purple";
document.body.appendChild(purpleBall);

console.log(document.getElementsByTagName('*'));

var clonePurple = purpleBall.cloneNode();
document.body.appendChild(clonePurple);

// boton

var btn = document.createElement('button');
document.body.appendChild(btn);
btn.style.width = '5em';
btn.style.height = '5em'
btn.style.cursor = "pointer";;
btn.innerText = "click";

btn.addEventListener('click', function () {
    console.log("HOLA WEY");
});

btn.addEventListener('mouseover',function () {
    console.log('HOOOOVER');
})