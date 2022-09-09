import data from "./data.js";

/*
Comenzaria seleccionando los botones de izquierda y derecha y el contenedor del slider
*/

const prevBtn = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const container = document.querySelector('.slide-container');

let people = [...data];


//agregar el contenido al contenedor

container.innerHTML = people.map((person,index) => {
    const { img, name, job, text } = person; //truco de ES6
    let position = 'next';
    if(index === 0){
        position = 'active';
    }
    if(index === people.length - 1){
        position = 'last';
    }
    if(data.length <= 1){
        position = 'active';
    } 
    return  `<article class="slide ${position}">
                <img src=${img}/>
                <h4>${name} doe</h4>
                <p class="title">${job}</p>
                <p class="text">${text}</p>
                <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
            </article>`;
}).join('');

//funcion para el Slider

function startSlider(type){
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    let next = active.nextSibling;
    console.log(active);
    console.log(next);
}


//agregar interaccion con los botones

prevBtn.addEventListener('click',() => {
    startSlider();
});

nextBtn.addEventListener('click',() => {
    startSlider('prev');
});