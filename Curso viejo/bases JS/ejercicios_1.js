'use strict'

/*

var numero1 = Number(prompt("Dame el primer numero wey: ",));
var numero2 = parseInt(prompt("Echame el 2do numero: ",));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = Number(prompt("Dame OTRA VEZ el primer numero wey: ",));
    numero2 = parseInt(prompt("Echame OTRA VEZ el 2do numero: ",));
}

console.log(numero1,numero2);

if(numero1 < numero2){
    document.write("\n El primero numero es mas chico\n");
}else if(numero1 > numero2){
    document.write("\n El segundo muero es mas chico\n");
}else{
    document.write("\n Son iguales\n");
}


//-----------------------------------------------------------------

// Introducir todos los numeros que esten entre los dos inputs del usuario

var x = parseFloat(prompt("Dame el Primer numero carshnal: "));
var y = parseFloat(prompt("Dame el Segundo numero carshnal: "));

document.write("<h3>Tu numero inicial es: </h3></br>", x);
document.write("<h3>Tu numero final es: </h3></br>", y);
document.write("</br>Los numero que esta en el medio son: </br>");

for(var i = x; i<=y; i++){
    
    document.write(i+"</br>");

}

//-----------------------------------------------------------------


// Introducir todos los numeros impares que esten entre los dos inputs del usuario

var x = parseFloat(prompt("Dame el Primer numero carshnal: "));
var y = parseFloat(prompt("Dame el Segundo numero carshnal: "));

document.write("<h3>Tu numero inicial es: </h3>", x);
document.write("<h3>Tu numero final es: </h3>", y + "</br>");
document.write("</br><h4>Los numeros impares que estan en el medio son: </h4>" + "</br>");

for(var i = x; i <= y; i++){
    if(i % 3 == 0){
        document.write("</br>" + i + "</br>")
    }
}


//-----------------------------------------------------------------

// Tabal de multiplicar del numero introducido por un usuario

var x = Number(prompt("Dame el numero del que quieras obtener la tabla de multiplicar: "));

var y = 0;

document.write("<h3>La tabla de multiplicar del " + x + " es: </h3></br>");

while(y <= 10){
    document.write(x + " x " + y + " = " + (x * y) + "</br>" );
    y++;
}




//-----------------------------------------------------------------

// Hay que hacer una calculadora

var x = String(prompt("Que operación deseas realizar? (+,*,/,-) "));

var y = Number(prompt("Primer numero: "));
var z = Number(prompt("Segundo numero: "));

switch(x){
    case "+": 
        document.write("</br>El resultado de la suma es: " , y + z);
    break;
    case "-":
        document.write("</br>El resultado de tu resta es: ", y - z);
    break;
    case "/":
        document.write("</br>El resultado de tu resta es: ", y / z);
    break;
    case "*":
        document.write("El resultado de tu multiplicacion es: ", y*z);
    break;
    default:
        document.write("No CHINGUES, que haces?");
    break;

}

*/