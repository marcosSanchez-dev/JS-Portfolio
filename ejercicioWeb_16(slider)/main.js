//selecciona los elementos

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

/*
Escribiria una funcion en donde al apretar el boton next,
cambie el 'img' , el 'h4' y el 'h1'.
*/

slides.forEach(function(item,index){
    item.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click',function () {
    counter++;
    carousel();
});

prevBtn.addEventListener('click',function () {
    counter--;
    carousel();
});

function carousel() {
    if(counter < slides.length - 1){
        nextBtn.style.display = 'block';
    }else{
        nextBtn.style.display = 'none';
    };
    if(counter > 0){
        prevBtn.style.display = 'block';
    }else{
        prevBtn.style.display = 'none';
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

prevBtn.style.display = "none";
