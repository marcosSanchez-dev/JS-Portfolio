const cubo = document.querySelector('.cubo');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menuPng = document.querySelector('.menuPng');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(cubo,1,{height:'0%'}, {height:'70%', ease: Power2.easeInOut })
.fromTo(cubo, 1.2, {width: '100%'}, {width: '90%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
.fromTo(logo,0.5,{opacity: 0, x: 30}, {opacity: 1, x: 0},'-=0.5')
.fromTo(menuPng,0.5,{opacity: 0, x: 30}, {opacity: 1, x: 0},'-=0.5')