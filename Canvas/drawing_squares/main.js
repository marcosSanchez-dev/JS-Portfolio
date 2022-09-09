const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const ctx = canvas.getContext('2d');
/*
ctx.fillStyle = 'blue';
ctx.fillRect(100,100, 150, 350);
ctx.fillRect(200,150, 150, 350);
ctx.fillStyle = 'lightpink';
ctx.fillRect(400,500, 150, 350);
ctx.fillRect(100,600, 150, 350);

// linea

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(250, 250);
ctx.lineTo(250, 450);
ctx.lineTo(150, 450);
ctx.stroke();



// circulo // arco

ctx.beginPath();
ctx.arc(500,500,30,0, Math.PI * 2, false);
ctx.strokeStyle = 'green';
ctx.stroke();

*/

/*
// ciclo for

for (let i = 0; i < 5; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    ctx.beginPath();
    ctx.arc(x,y,60,0, Math.PI * 2, false);
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
}
*/


const mouse = {
    x: undefined,
    y: undefined,
    radius: ((canvas.height/100) * (canvas.width/100))
}

let maxRadius = 80; 
let minRadius = 20;
let colors = ['#7400B8','#5E60CE','#4EA8DE','#56CFE1','#72EFDD'];

//OOP

function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.lineWidth = 5;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fill();
        ctx.lineWidth= this.lineWidth;
    }

    this.update = function() {

        //condicion para que los circulos reboten en las orillas

        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;


        //Interactividad con el mouse

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius < maxRadius){
                this.radius += 0.5;
            }
            }else if(this.radius > this.minRadius){
                this.radius -= 1;
            }

            //Colicion con el mouse

            let restDx = mouse.x - this.x;
            let restDy = mouse.y - this.y;
            let distance = Math.sqrt(restDx*restDx + restDy*restDy);
            let mouseRadiusThreshold = 3;

            if(distance < mouse.radius + this.radius){
                if(mouse.x < this.x && this.x < canvas.width - this.radius * 10){
                    this.x += mouseRadiusThreshold;
                }
                if(mouse.x > this.x && this.x > this.size * 10){
                    this.x -= mouseRadiusThreshold; 
                }
                if(mouse.y < this.y && this.y < canvas.height - this.radius *10){
                    this.y += mouseRadiusThreshold;
                }
                if(mouse.y > this.y && this.y > this.radius * 10){
                    this.y -= mouseRadiusThreshold;
                }
            }

        this.draw();

    }

}

let circleArray = [];

    //Crea un array con 200 circulos nuevos cada que llamas a INIT:

function init() {
    circleArray = [];
                //Agregas el numero de circulos
    for (let i = 0; i < 200; i++) {
        let radius = Math.random() * minRadius + 1;  
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 1.5;
        let dy = (Math.random() - 0.5) * 2;
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}

function animation() {
    requestAnimationFrame(animation); //funcion para animacion
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    connect();
}

let lineWidthRandom =  Math.random() * 3 + 1;
let lineLength = 5000;

// Dibujas una raya del centro de un circulo a otro

function connect() {
    let opacityValue = 1;
    //i es cada particula individual
    for (let a = 0; a < circleArray.length; a++) {
        // j es toda las demas particula en el mismo array
        for (let b = a; b < circleArray.length; b++) {
            let distance = ((circleArray[a].x - circleArray[b].x) * (circleArray[a].x - circleArray[b].x)) + ((circleArray[a].y - circleArray[b].y) * (circleArray[a].y - circleArray[b].y));
        
        if(distance < (canvas.width/7) * (canvas.height/7)) {
            opacityValue = 1 - (distance/lineLength);
            ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')'; //color de las lineas 
            ctx.lineWidth = lineWidthRandom;
            ctx.beginPath(); 
            ctx.moveTo(circleArray[a].x, circleArray[a].y);
            ctx.lineTo(circleArray[b].x, circleArray[b].y);
            ctx.stroke();
        }

        }
    }
}


function onMouseMove(event) {
    mouse.x = event.x;
    mouse.y = event.y;
}

window.addEventListener('mousemove', onMouseMove);

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //init();
});

init();

animation();