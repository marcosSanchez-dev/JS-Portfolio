

// hay dos manera de declarar un una lista:

var lista_uno = ["hola", 5, true, 10.3];

var lista_dos = new Array("Adios", 8, false, 4.4);

document.write(lista_uno);
console.log(lista_uno);

document.write("</br>" + lista_dos);
console.log(lista_dos);

document.write("</br>La longitud de tu lista en lista_uno es :" + lista_uno.length);



//---------------------------------------------------------------------------------

// FOR EACH

var lista = ["hi",5,true,"adios"];

lista.forEach((item,indice,arreglo)=>{   // es equivalente a poner: function(elemnto,indice,arreglo){}
    document.write(indice + " <--> " + item + " <--> " + arreglo + "</br>");
});

//---------------------------------------------------------------------------------


.push(); --> añade un elemento al array al final, especificas el elemtno dentro del parentesis. var x.push();
.pop(); --> quitas el ultimo elemento de la lista
.join(); --> se debe guardar en una variable para que convierta el array a un String separado por comas ","
.split(); --> convierte la cadena de texto completa en una lista[], pero si ingreso (" "), quiere decir que usara el espacio como indicador para crear items por separados
.sort(); --> ordena un array en orden alfabetico 
.reverse(); --> invierte el array
.find(); --> busca si hay un item (por medio de una funcion) dentro de un array y si existe, te regresa el mismo elemento que buscas
.findIndex(); --> encuentra el indice del elemento que buscas 
.some(); --> hace una comparción de numeros en el arreglo y regresa true o false dependiendo la condicion.

// FOR IN 

var arreglo = ["Uno",2,true];

for(let indice in arreglo){
    document.write("Este el indice de mi array: " + indice + " y este es el item: " + arreglo[indice] + "</br>");
}



//METODO FIND

var arreglo = ["Uno",2,true];

var metodo_find = arreglo.find(items => items === 2); // si dentro de los items esta el valor 2, entonces imprimelo

document.write("El elemento " + metodo_find + " si esta en el array.");


var metodo_find = arreglo.findIndex(items => items === 2); 

document.write("</br> El indice es: "+ metodo_find);

*/

// METODO SOME


var arreglo = [1,10,50,80];

var metodo_some = arreglo.some(items => items > 80); // existe algun item dentro de la lista, mayor a 80?

document.write(metodo_some);