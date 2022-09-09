const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

let particleArray = [];
const colours = [
    'black'
];

const maxSize = 60;
const minSize = 0;
const mouseRadius = 80;

function Particle(x,y,dirX,dirY,size) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.colour = colours[Math.floor(Math.random() * colours.length)];
}

Particle.prototype.draw = function (){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = 'white';
        ctx.fillStyle = this.colour;
        ctx.lineWidth= 3;
}


Particle.prototype.update = function() {

    //choque con paredes del navegador
    if(this.x + this.size > window.innerWidth || this.x - this.size < 0) {
        this.dirX = -this.dirX;
    }
    if(this.y + this.size > window.innerHeight || this.y - this.size < 0) {
        this.dirY = -this.dirY;
    }
    this.x += this.dirX;
    this.y += this.dirY;

    // mouse interactivity
    if (mouse.x - this.x < mouseRadius && mouse.x - this.x >-mouseRadius && mouse.y - this.y < mouseRadius && mouse.y - this.y >-mouseRadius) {
	    if (this.size < maxSize){
		    this.size += 3;
            this.x -=1.5;
	    } 
    }
    else if (this.size > minSize){
		    this.size -= 1;
    }
    if (this.size < 0) {
        this.size = 0;
    }
    this.draw();
}


function init() {
    particleArray = [];
                //Agregas el numero de circulos
    for (let i = 0; i < 600; i++) {
        let radius = Math.random() * minSize + 1;  
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * .1;
        let dy = (Math.random() - 0.5) * .1;
        particleArray.push(new Particle(x,y,dx,dy,radius));
    }
}

function animation() {
    requestAnimationFrame(animation); //funcion para animacion
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}

init();
animation();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

setInterval(function(){
    // NULL WONT WORK AS IF IT COERCE INTO POSITION 0 and draw all particle in the corner
	mouse.x = undefined;
	mouse.y = undefined;
}, 1000);