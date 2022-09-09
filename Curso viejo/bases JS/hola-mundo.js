'use strict'


alert("Hola mundo con jay es :)");
alert("hay que darle bro, estoy contigo");
//document.write("Fichero externo brooo")
console.log("que pe2");
console.log(88 + 4);

// -------------------------------------------------------

var x = "mi primer variable en JS";
var y = 77;
var suma = x + " "+ y + " = mi primera concatenacion";
console.log(x , y);
alert(suma);

// -------------------------------------------------------


var fool = 10;
console.log(fool);

if(true){
    let fool = 666; // let hace que la variable tenga el valor solo dentro del bloque IF y no de manera global

    console.log(fool); 
}

console.log(fool); // aqui "FOOL" tiene su valor GLOBAL


// ----------------String(), Number(),parseInt(),parseFloat()-------------------


var fool = 10.0;
document.write(typeof(fool))
console.log(typeof(fool))


// -------------------------------------------------------


var fool = 44;
var spam = 44;

if(spam != fool){
    console.log("Que onda");
}
else{
    console.log("son iguales, no son diferentes");
}

// -------------------------------------------------------

var x = 10;
var y = 11;

if(true || false){
    console.log("Solo una debe ser true");
}else{
    console.log("la dos deben ser true");
}



// -------------------------------------------------------

var y = 11;

switch(y){
    case 9:
        console.log("es 9");
    break;
    case 10:
        console.log("es 10");
    break;
    case 11:
        console.log("es 11");
    break;
    default:
        console.log("no pasa nada");
    break;
}



// -------------------------------------------------------

var y = 100; 

for(var i = 0; i <=100; i++){

    console.log(i);

debugger; // sirve para ver paso a paso en el servidor como iterael ciclo FOR
}

// -------------------------------------------------------


var x = 100;
var y = 0;
while(y != x){
    console.log("este loop es infinito si no lo detienes");
    y++;
}


// -------------------------------------------------------


var fool = 100;
var par = 10;

do{
    console.log("Que ondaaaa");
    par++;
}while(par < fool)



// -------------------------------------------------------

var resultado = confirm("Dale aceptar y te madreo"); //una opcion para aceptar o cancelar
console.log(resultado);

var usuario = prompt("Del 1 al 10 que tan rifado eres?", ); // dos valores
console.log(Number(usuario)); //la entrada es una STRING


// -------------------------------------------------------

*/