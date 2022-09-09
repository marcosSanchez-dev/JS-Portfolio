const logo = document.querySelector(".illuminu-logo"); 

logo.addEventListener("mousemove", function(e){ 
    x = e.offsetX; 
    y = e.offsetY; 
    logo.style.filter = `drop-shadow(0px 0px 3px rgb(${x}, ${y}, ${x - y}))`; 
});

const letrasPath = ['letra-i-uno','letra-l-uno','letra-l-dos','letra-u','letra-m','letra-i-dos','letra-n','letra-v'];

const domPath = [];

letrasPath.forEach(item => domPath.push(document.getElementById(item)));


function mouseInteraction(letra) {
    letra.onmouseover = changeBG;
    letra.onmouseout = normalBG;
}

function changeBG(e) {
    e.target.style.stroke ='red';
    e.target.style.cursor = 'pointer';
}

function normalBG(e) {
    e.target.style.stroke = '';
}

domPath.forEach(mouseInteraction);

const caja = document.getElementById('caja-roja');

window.addEventListener('mousedown',() => {
    caja.setAttribute('color',`rgb(${randomRgb(244)},${randomRgb(244)},${randomRgb(244)})`);
});

function randomRgb(val) {
    return Math.floor(Math.random() * val);
}

