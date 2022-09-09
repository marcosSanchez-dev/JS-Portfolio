const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate  = new Date(2020,10,27,0,0);

const year = futureDate.getFullYear();
let month = months[futureDate.getMonth()]; //arrays months
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const weekday = weekdays[futureDate.getDay()]; //array weekdays

giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;


//future time in miliseconds

const futureTime = futureDate.getTime(); 

//Today

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today; //future time from TODAY in miliseconds

    /* 
    hay que saber cuantos milisegundos hay en un dia para
    poder saber cuantos dias hay en 't'
    
    1seg = 1000ms
    1min = 60seg
    1hr = 60min
    1day = 24hrs

    */
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay)/oneHour); // de la fecha futura a hoy, dime cuanto falta pero en horas. Porque si faltan días ya tengo otra variable
    let minutes = Math.floor((t % oneHour)/oneMinute);
    let seconds = Math.floor((t % oneMinute)/1000);

    //una funcion que le de formato al texto y añado un '0' antes del numero
    function format(dato) {
        if(dato<10){
            return dato = `0${dato}`
        }else{
            return dato
        }
    };
    

    //con un forEach añadir los elementos a los h4 de la variable 'items';
    const values = [days,hours,minutes,seconds];

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h2 class='expired'>FELIZ CUMPLEAÑOS!</h2>`;
    }
};

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();

