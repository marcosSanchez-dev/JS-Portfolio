
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];

let mouse = {
    x: null,
    y: null, 
    radius: 150
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x + canvas.clientLeft/2;
    mouse.y = event.y + canvas.clientTop/2;
}) 

function drawImage() {
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth * 2, imageHeight * 2);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    class Particle{
        constructor(x,y,color){
            this.x = x + canvas.width/4 + png.width * -1;
            this.y = y + canvas.height/3 + png.height * -2;
            this.color = color;
            this.size = 3.5;
            this.baseX =  x + canvas.width/4 + png.width * -1;
            this.baseY = y + canvas.height/3 + png.height * -2;
            this.density = ((Math.random() * 5) + 2);
        }
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        update(){
            ctx.fillStyle = this.color;

            //collision detection
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;

            //max distance, past that the force will be 0
            const maxDistance = 200;
            let force = (maxDistance - distance) / maxDistance * 2;
            if(force < 0){
                force = 0;
            }
            
            let directionX = (forceDirectionX * force * this.density * 0.9);
            let directionY = (forceDirectionY * force * this.density * 0.9);

            if(distance < mouse.radius + this.size){
                this.x -= directionX;
                this.y -= directionY;
            }else{
                if(this.x !== this.baseX){
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.x -= dx/20;
                }if(this.y !== this.baseY){
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.y -= dy/20;
                }
            }
            this.draw();
        }
    }
    function init() {
        particleArray = [];

        for(let y = 0, y2 = data.height; y < y2; y++){
            for(let x = 0, x2 = data.width; x < x2; x++){
                if(data.data[(y * 2 * data.width) + (x * 2) + 3] > 30){ //numero de puntos y tamaño
                    let positionX = x;
                    let positionY = y;
                    let color = 'rgb(' + data.data[(y * 4 * data.width) + (x * 4)] + ',' +
                                        data.data[(y * 4 * data.width) + (x * 4) + 1] + ',' +
                                        data.data[(y * 4 * data.width) + (x * 4) + 2] + ')';
                    
                    particleArray.push(new Particle( positionX * 4, positionY * 4, color));
                }
            }
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(255,255,255,0.3)'; //opacidad 
        ctx.fillRect(0, 0, innerWidth, innerHeight);
    
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
            
        }
    }
    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    });
}

const png = new Image();


png.src = "data:image/png;base64,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";

window.addEventListener('load', (event) => {
    console.log('la pagina ya se cargo');
    ctx.drawImage(png, 0, 0);
    drawImage();
});
