'use strict'


function imprime(){
    return "Que onda </br>";
}

document.write(imprime());


//------------------------------------------------------------


function imprime_dos(){
    document.write("Otra forma");
}

imprime_dos();



//------------------------------------------------------------



function suma(num1,num2){
    document.write("</br>El resultado de la suma es ", num1 + num2);
}

for(var i = 0; i <= 10; i++){
    suma(i,10);
}


//------------------------------------------------------------



function rest(num1,num2,...numTodos){ //esta opcion de los 3 puntos, regresa los valores extra como una lista []
    document.write("La el resultado de la suma final es: ", num1 + num2 + "</br> array: " + numTodos);
    console.log(numTodos); // lo puse para ver en la consola el arreglo resultante
}

// rest(2,2,1,1,1); los ultimos 3 numeros son un array

var spread = [6,6];

rest(...spread,1,1); // los tres puntos antes de la variable hacen que el array lo conviertas a valor independientes dentro de la funcion



//------------------------------------------------------------



function prueba_argumentos(valor1,valor2){      // "ARGUMENTS" se puede utilizar para agregar más valores no declarados en la funcion
    document.write("El valor UNO es ", arguments[0], " y el valor DOS es: ", arguments[1], " , el valor TRES no declarado en la funcion es: ", arguments[2]);
    document.write("</br>La suma de los 3 valores es: ", arguments[0] + arguments[1] + arguments[2]);
}

prueba_argumentos(6,20,10);


//------------------------------------------------------------


// *****FUNCIONES ANONIMAS*****

var anonima =  function(valores){   
    document.write("El valor de esta funcion anonima es: ", valores);
}

anonima("YO SOY EL VALOR JEJE");


//------------------------------------------------------------


function callback_0(param1,param2,param3,param4){ //el param3 y param4 llaman a una funcion anonima (callback)
    var operaciones = param1 + param2;
    param3(operaciones);
    param4(operaciones); 
    return operaciones;
    
}

callback_0(2,2,function(valor1){ //declaro la funcion del param3
    document.write(valor1 +2 );
},function(valor2){             //declaro la funcion del param4
    document.write("</br>"+ (valor2 + 1));
});



//------------------------------------------------------------

function callback_0(param1,param2,param3,param4){ 
    var operaciones = param1 + param2;              // Se puede declarar una funcion dentro de una variable sin "var"
    param3(operaciones);
    param4(operaciones); 
    return operaciones;
    
}

callback_0(2,2, valor1 => {                 //FUNCION FLECHA es igual a function(valor1),si es un parametro no lleva parentesis
    document.write(valor1 +2 );
},valor2 =>{                                //FUNCION FLECHA --> es igual a function(valor2), si son dos parametros si lleva parentesis
    document.write("</br>"+ (valor2 + 1));
});


//------------------------------------------------------------

// *******Se puede puede acceder a una variable global dentro de una funcion, pero no se puede acceder a una variable local fuera de su funcion.********

// ******* el metodo .toString() puede convertir a String los numeros *********

// ************  JSON.stringify convierte los objetos a STRING **********

//------------------------------------------------------------



// Hacer un ejercicio en el que añadas un nuevo valor a un array y quites el primero y que ese primer item sea el return de la funcion. Imprimi la lista antes y despues del cambio


var arreglo = [1,2,3,4,5];

function operacion(lista,valor_agregado){
    lista.push(valor_agregado);
    return lista.shift(); // quita el prime numero
}

document.write("Antes de las modificaciones: " ,arreglo);
operacion(arreglo,6);
document.write("</br>Despues de las modificaciones: ", arreglo );



//------------------------------------------------------------


// ***** JS puede comparar dos elementos que no sean del mismo tipo, ya que hace automaticamente la convercion ********

// "===" operador de igualdad estricta y "!==" desigualdad estricta

var x = 3;

var y = '1';

if( x > y){
    document.write("True");
}else{
    document.write("False");
}

*/

//------------------------------------------------------------


