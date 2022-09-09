
// IIFE
((numero) => console.log(2 + numero))(7);

//Closure

function closure(numero) {
    return function (otroNumero) {
        console.log(numero + otroNumero);
    };
};

closure(5)(5);
var variableClosure = closure(5);
variableClosure(1);

// First Class Functions

function FirstClass(num , fn) {
    let numero = num;
    console.log("FirstClass:", fn() + num);
}

FirstClass(5, function () {
    return 5 - 3;
} );

//Function Constructor

function Constructor(name,age) {
    this.nombre = name;
    this.age = age;
    this.calcAge = function () {
        return 2020 - this.age;
    };
};

// Prototype property

Constructor.prototype.holaMundo = function () {
    console.log('hola:', this.nombre);
}

var Marcos = new Constructor('marcos',1995);
console.log(Marcos.calcAge());
Marcos.holaMundo();

// ARRAYS

var array = [27, 1995 , 'Alejandra'];

(function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
})(array);

var array2 = new Array(27, 1995 , 'marcos');

var arrayString = array2.join(' '); //converti el array a un string

var stringArray = "Hola mundo soy Marcos";
var Split = stringArray.split(' '); // converti el String a un array

console.log( array2.find(parametro => parametro === 'marcos') ); // Se necesita una funcion que evalue a TRUE para que find y findIndex se puedan ejecutar
console.log( array2.findIndex(findMethod) );

function findMethod(dato) {
    return dato === 'marcos';
}

// FOR EACH

var foreach = ['marcos',true,27];

foreach.forEach((element,index,array) => {
    console.log("element: ", element, "index:", index, "array:", array);
});

// SWITCH

var edad = 18;

switch (edad) {
    case 18:
        console.log('puedes pasar');
        break;
    case 17:
        console.log('no puedes pasar');
    default:
        console.log('largo de aqui');
        break;
};

//do while

var x = 50;
var y = 60;

do{
    console.log("hola mundo");
    x++;
}while(x<y);

// BOM

var width = window.innerWidth;
var height = window.innerHeight;

var divTest = document.createElement('div');
document.body.appendChild(divTest);

divTest.style.width = width;
divTest.style.height = height;
divTest.style.background = 'red';

// setInterval

var circulo = document.createElement('div');
document.body.appendChild(circulo);
circulo.style.height = '20vh';
circulo.style.width = '20vw';
circulo.style.position = 'absolute';
circulo.style.top = '40vh';
circulo.style.left = '40vw';
circulo.style.border = '1px solid black';

function estrobo() {
    var loop = setInterval( () => {
        if(circulo.style.background == ''){
            circulo.style.background = 'blue';
        }else{
            circulo.style.background = '';
        }
    },800);
    return loop;
}
var stopBTN = estrobo();

// CLEAR INTERVAL

var btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent='STOP';
btn.style.height = '8vh';
btn.style.width = '8vw';
btn.style.position = 'absolute';
btn.style.top = '62vh';
btn.style.left = '46vw';
btn.style.cursor = 'pointer';

btn.addEventListener('click',()=>{
    clearInterval(stopBTN);
});