/*

--> Un programa que pida 6 numeros por pantalla y los meta a un array
--> Mostrat el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
--> Ordenarlo y mostrarlo
--> Invertir su orden y mostrarlo
--> Mostrar cueantos elementos tiene el array
--> Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice

*/

var primer_numero = prompt("Dame el PRIMER numero: "); segundo_numero = prompt("Dame el SEGUNDO numero:" ); tercer_numero = prompt("Dame el TERCER numero: "); cuarto_numero = prompt("Dame el CUARTO numero: "); quinto_numero = prompt("Dame el QUINTO numero: "); sexto_numero = prompt("Dame el SEXTO numero: ");

var lista = primer_numero + " " + segundo_numero + " " + tercer_numero + " " + cuarto_numero + " " + quinto_numero + " " + sexto_numero;

var separador = lista.split(" "); // el metodo SPLIT se debe guardar en una variable para que se aplicado

document.write("Esta es la lista que ingresaste: "+separador);
console.log(separador);

var lista_orden = separador.sort();


document.write("</br> Lista ordenada: " + lista_orden);

var lista_invertida = lista_orden.reverse();

document.write("</br> Lista invertida: " + lista_invertida);

var longitud = lista_invertida.length;

document.write("</br> La lista tiene " + longitud + " elementos");

var encuentra = prompt("Que valor quieres que busque en el array? : ");

var metodo_encuentra = lista_orden.includes(encuentra);

if(metodo_encuentra == true){
    document.write("</br><h4> Si esta ese elemento en la lista </h4>");
}else{
    document.write("</br><h4> No esta el elemento en la lista</h4>");
}

