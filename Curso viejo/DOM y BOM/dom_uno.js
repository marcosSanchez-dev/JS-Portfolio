'use strict'


// *********** CONSEGUIR ELEMENTOS CON UN ID ESPECIFICADO ***********

//var x = document.getElementById("identificador"); // la variable guarda el valor que contiene el div con el id "identificador"
var x = document.querySelector("#identificador"); //.querySelector solo selecciona un elemento pero .querySelectorAll selecciona todos

x.innerHTML = "CAMBIANDO CONTENIDO"; // reemplace el contenuido de mi DIV

x.style.background = "rgb(234, 110, 51)";
x.style.padding = "0.5em";
x.style.fontSize = "5em";
x.style.boxShadow = "3px 10px";
x.style.opacity = "0.8";
x.style.fontWeight = "bold";
x.style.color = "rgb(0,255,0)";
x.className = "primera_clase";

console.log(x);

function cambia_color(colores){
    x.style.background = colores;
}

cambia_color("rgb(255,0,0)"); // Llamando a la funcion


//*************** CONSEGUIR UN ELEMENTO POR SU ETIQUETA **************

var todosLosDivs = document.getElementsByTagName("div"); //este metodo te regresa un array con todos los divs

console.log(todosLosDivs); // lista en la consola de todos los vids

var separaUnDiv = todosLosDivs[2]; // separé un div del array de divs

separaUnDiv.innerHTML = "YA SOY EL TERCER DIV"; // cambia el contenido del div o te puede regresar el valor dentro del div al igual que .textContent;

separaUnDiv.style.background = ("rgb(255,0,200)");

for(var i in todosLosDivs){
var parrafo = document.createElement("p");
var contenido = document.createTextNode(todosLosDivs[i].textContent); // Crea un texto--> con todos los divs --> Y muestamelo
parrafo.append(contenido); // el "p" ahora ya tiene adentro la lista que hay en var contenido
document.querySelector("#miSeccion").appendChild(parrafo); //mete el contenido del parrafo a el elemento que tengo con ID miSeccion

}


//EJEMPLO SIMPLE

var y = document.createElement("h1"); // Creo un elemento H1 y lo adjunto al doc
var j = document.createTextNode("Que onda");
y.appendChild(j);
document.body.appendChild(y);

*/