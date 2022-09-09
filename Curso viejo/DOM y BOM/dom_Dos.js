//ENCONTRAR UN ELEMENTO POR SU CLASE

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

console.log(divsRojos);

divsRojos[0].style.backgroundColor = ("rgb(255,0,0)");
divsRojos[1].style.backgroundColor = ("rgb(100,0,255)");


