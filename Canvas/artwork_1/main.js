let number = 0;
let scale = 10;


const canvas = document.getElementById('canvas1');

/*En esta linea de codigo estoy seleccionando la API para dibujar*/ 
const ctx = canvas.getContext('2d');

/*El canvas cubre toda la pantalla y se redimensiona solo*/ 
canvas.width = innerWidth;
canvas.height = innerHeight;

// ctx.fillRect(250,350,300,100);

function drawFlower() {
    let angle = number * 4;
    let radius = scale * Math.sqrt(number);
    let posX = radius * Math.sin(angle) + canvas.height/2;
    let posY = radius * Math.cos(angle) + canvas.width/2;

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath(); //Con esto le digo a JS que comenzare a dibujar 
    ctx.arc(posX, posY, 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); // crea un border de 1px negro

    number++;
}

function animate() {
    /*
    ctx.clearRect(0,0,innerWidth,innerHeight); // esta funcion limpia el canvas de dibujos anteriores

    posX += 10 * Math.sin(angle);
    posY += 10 * Math.cos(angle);
    */
    
    drawFlower();
    /*La siguiente funcion, por default llama a otra funcion en 
    periodos cortos como un loop*/
    requestAnimationFrame(animate);
}

animate();