'use strict'

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


// Constructor

function Ball(color,ejeX,ejeY,velX,size){
    this.color = color;
    this.ejeX = ejeX;
    this.ejeY = ejeY;
    this.velX = velX;
    this.size = size;
};

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.ejeX,this.ejeY,this.size,0, 2 * Math.PI);
    ctx.fill();
}


Ball.prototype.update = function () {
    if ((this.ejeX + this.size) >= width){
        this.velX = -(this.velX);
    };
    if ((this.ejeX - this.size) <= 0){
        this.velX = -(this.velX);
    };
    this.ejeX += this.velX;
};

var redBall = new Ball("blue",90,90,10,15);

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0,width,height);
    redBall.draw();
    redBall.update();
    requestAnimationFrame(loop);
};

loop();