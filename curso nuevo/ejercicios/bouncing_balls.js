// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // es un objeto que te permite dibujar

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//comportamiento de las pelotas

function Ball(x,y,velX,velY,color,size) {
    this.x = x; //posicion horizontal
    this.y = y; // posicion vertical
    this.velX = velX; //velocidad horizontal
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//fucion dentro del prototype property que dibuja el circulo y es heredado por otros objetos

Ball.prototype.draw = function () {
    ctx.beginPath(); // le indica al programa que vamos a comenzar a dibujar
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0, 2 * Math.PI); // coordenadas x,y -- radio del arco -- angulo en el que comienza y termina
    ctx.fill();
}

/*var testBall = new Ball(150,100,4,4,'red',50);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();

var testBallBlue = new Ball(250,200,4,4,'blue',50);

testBallBlue.x;
testBallBlue.size;
testBallBlue.color;
testBallBlue.draw();*/

var balls = [];

// si la pelota alcanza el ancho o alto del bloque "canvas" entonces se invierte su direccion
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
}


// Animacion
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, width, height); // se dibuja un rectangulo para sobreescribir el ciruclo dibujado anteriormente
  
    while (balls.length < 15) {
      var size = random(10,30);
      var ball = new Ball(
        random(size,width - size), //x
        random(size,height - size), //y
        random(-2,2), //velX
        random(-2,2),//velY
        'white', //color
        size // size
      );
      balls.push(ball);
    }
  
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw(); //para cada elemento en el array, que se ejecuten estas funciones
      balls[i].update();
    }
  
    requestAnimationFrame(loop); //una vez que llamaste a la funcion, este metodo la llama de nuevo por si solo
}

  loop();