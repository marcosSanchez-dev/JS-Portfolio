/**************** DECLARAMOS VARIABLES *************/ 

//Estas son mis IMG's del html a los que les cambiare el src
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//En total hay 3 puertas cerradas
let numClosedDoors = 3;
//Hay 3 puertas que se abriran y mostraran contenido que se almacenara aquí
let openDoor1, openDoor2, openDoor3;

//Este es mi boton start
let startButton = document.getElementById('start');
//En que estado está el juego?
let currentlyPlaying = true;

//Estas son las ilustraciones cuando mis puertas se abren
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const bootDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

//así luce mi puerta cerrada, o más bien, tiene este src attribute
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';


/**************** 
GENERAMOS UN NÚMERO ALEATORIO QUE ASIGNA UNA IMAGEN A LAS VARIABLES QUE 
SE ACTIVARAN CUANDO LA PUERTA SE ABRE
*****************/ 
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

// Si el numero es 0 ó 1 ó 2, quiero que alamacenes el src de estas puertas en estas variables.
  if(choreDoor === 0){
    openDoor1 = bootDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = bootDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else{
    openDoor3 = bootDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};

/**************** 
COMO SÉ SI UNA PUERTA ESTA CERRADA O ABIERTA?
*****************/ 
function isClicked(door){
  //si el src del parametro 'door' es igual a una puerta cerrada, entonces dame false.
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
}


/**************** 
QUE OCURRE CUANDO LE DOY CLICK A UNA PUERTA?
*****************/ 
doorImage1.onclick = () => {
  //si la puerta ya estaba cerrada, quiero que cambies la imagen por un nuevo src.
    if(currentlyPlaying && !isClicked(doorImage1)){
      doorImage1.src = openDoor1;
      playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}; 

doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}; 

/**************** 
ESTA FUNCION ME INDICA CUANDO TODAS LAS PUERTA YA FUERON ABIERTAS 
*****************/
function playDoor(door){
  numClosedDoors--;
  //si ya no hay puertas por tocar, se termina el juego
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door) === true){
    return gameOver();
  }
}

/**************** 
ENCONTRASTE AL ROBOT EN LA PUERTA!
*****************/
function isBot(door){
  if(door.src === bootDoorPath){
    return true;
  }else{
    return false;
  }
}

/**************** 
ESTA FUNCION ME INDICA CUANDO TODAS LAS PUERTA YA FUERON ABIERTAS 
*****************/
function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?.';
  }else{
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
}

/**************** 
SI EL ESTADO EN EL QUE ESTA EL JUEGO ES FALSE, QUE EL BOTON SIRVA PARA REINICIARLO
****************/
startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
}

/**************** 
REGRESA TODO A SU ESTADO INICIAL
****************/
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startRound();