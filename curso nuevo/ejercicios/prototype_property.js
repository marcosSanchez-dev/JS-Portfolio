'use strict'

// manera #1 de crear un objeto
var objetoUno = {
    name : "marcos",
    age : 22
}
// manera #2 de crear un objeto
var objetoDos = new Object ();

objetoDos.name = "marcos";
objetoDos.age = 23;

// manera #3 de crear un objeto

function objetoTres(name,age) {
    this.name = name;
    this.age = age;
    this.calcAge = function () {
        console.log(2020 - this.age);
    }
}

objetoTres.prototype.married = "no married";

var marcos = new objetoTres("marcos",25);
marcos.lastName = "sanchez";
marcos.calcAge();
console.log('objetoUno ',objetoUno);
console.log('objetoDos ',objetoDos);
// console.log(objetoTres);
console.log(marcos);

console.log(objetoTres.hasOwnProperty("name"));

// *************** Usar el Object.create ****************

var objCreate = {
    calcEdad : function () {
        console.log(2020 - this.edadActual);
    }
}

// FORMA 1

var mauricio = Object.create(objCreate); // Te da la ventaja de decidir que va dentro del prototype property
mauricio.name = "mauricio";
mauricio.edadActual = 17;
console.log("mauricio ", mauricio);
console.log("edad mau ", mauricio.calcEdad());

//FORMA 2

var dani = Object.create(objCreate,{
    name : { value : 'dani'},
    edadActual :  { value:11}
});

console.log("dani ", dani);