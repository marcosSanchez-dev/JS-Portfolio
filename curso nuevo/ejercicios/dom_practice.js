'use strict'

/*
El objeto Window. es el objeto global que representa a la ventada del ordenador
*/

var a = "hola";

console.log(window.a);
console.log(a);

/*
El objeto document. es un subobjeto del Window, este objeto represta al HTML
*/

// getElementById();

var byId = document.getElementById('miDivision');
console.log('element by ID: ',byId);

// getElementsByTagName();

var byTag = document.getElementsByTagName('div');
console.log('elements by Tag: ',byTag);

var allTag = document.getElementsByTagName('*');
console.log('all elements by Tags: ',allTag);

// getElementsByName(); SOLO FUNCIONA PARA FORMULARIOS: 

var byName = document.getElementsByName('byName');
console.log('getElementsByName: ',byName);

// querySelector();

var querySelect = document.querySelector("#menu .item span");
console.log('querySelector : ',querySelect);

// querySelectorAll();

var querySelectAll = document.querySelectorAll("#menu .item span");
console.log('querySelectorAll : ',querySelectAll);

/*
Editando un elemento HTML con el DOM
*/

//cambiando el atributo de un link:

var linkChange = document.getElementById('miLink');
console.log('getAttribute: ' ,linkChange.getAttribute('href'));
linkChange.setAttribute('href','https://www.facebook.com/');
console.log('getAttribute: ' ,linkChange.getAttribute('href'));
linkChange.href = 'https://www.omarimc.com/';
console.log('getAttribute: ' ,linkChange.getAttribute('href'));

//Agregando una clase desde DOM

var bgBlue = document.getElementById('miColorDiv');
bgBlue.className = "blue";

// innerHTML e innerText

console.log('innertHTML: ',bgBlue.innerHTML); // con etiquetas
console.log('innerText: ', bgBlue.innerText); // sin etiquetas

bgBlue.innerHTML = '<b>Hola mundo desde DOM</b>';
bgBlue.innerHTML += ' // Concatenando texto desde el DOM';


