/*
El uso del 'use strict' no permite que el THIS se combierta en el objeto WINDOW
*/

function ThisTest() {
    'use strict'
    console.log(this);
}

ThisTest();

/*
THIS en un metodo
 */

 var objetoThis = {
    name : "marcos",
    age : 24,
    calcAge : function () {
        console.log(this.age);
    },
    printName : function () {
        console.log ('hola mi nombre es: ${this.name}'); // no sirve esta funcion
    }
 };

 objetoThis.calcAge();

 objetoThis.printName();

/*
THIS dentro de un AddEventListener
*/

document.getElementById("btn").addEventListener("click", function () {
    console.log(this);
})

/*
THIS en un constructor
*/

var thisObjeto = function (name,age) {
    this.name = name;
    this.age = age;
}

thisObjeto.prototype.lastName = "sanchez";

var marcos = new thisObjeto("marcos",24);
console.log(marcos);
var mañi = new thisObjeto("Alejandra",22);
console.log(mañi);


/*
THIS en un ARROW FUNCTION
*/

class Persona {
    constructor() {
      this.edad = 0;
    }
  
    aumentarEdad() {
      setInterval(() => {
        this.edad++;
        console.log(this.edad);
      }, 1000)
    }
  }
  
  var fili = new Persona(); 
  fili.aumentarEdad();
