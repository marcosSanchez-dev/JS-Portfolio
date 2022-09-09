'use strict'

window.addEventListener("load", ()=>{

        // ******************  ESTILIZAR EL TITULO  ******************

    var titulo = document.querySelector(".titulo");

    console.log(titulo);

    titulo.style.textShadow = "5px 5px 10px black";

    titulo.firstChild.style.backgroundImage = "url('imagen.jpg')"; 
    titulo.firstChild.style.backgroundSize = "100%";
    titulo.firstChild.style.boxShadow = "3px 3px 20px rgba(255,255,255,0.4)";
    
    var divs = document.getElementsByTagName("div");

    console.log(divs);

    var sideBars = divs[2];

    sideBars.style.background = "rgba(0,0,0,0.1)";

        // ******************  CAMBIAR EL CONTENIDO DE UN TAG CON METODO REPLACE  ******************

    var insertoJs = document.createElement("h1");
    var textoInserto = document.createTextNode("HOLA MUNDO!");
    insertoJs.append(textoInserto);
    document.querySelector("#inserto").appendChild(insertoJs);

    var divInserto = document.querySelector("#inserto").innerHTML;
    var reemplazo = divInserto.replace("HOLA","adios");
    document.querySelector("#inserto").innerHTML = reemplazo;
    
    function pedirUsuario(loquesea) {  // una funcion que le pide al usuario un texto y lo imprime en la pagina

    var contenido = /*prompt*/("Escribe lo que sea bro <3: ");  
    document.querySelector("#inserto").innerHTML = reemplazo +" " + contenido;
}
    pedirUsuario();

    // ******************  USO DEL METODO new RegExp  ******************

    var textoEscrito = divs[6].firstChild;

    console.log("antes", textoEscrito);
    
    var encuentra = palabra =>{

        let cambiaColor = new RegExp(palabra,"gi");
      
        if(textoEscrito.innerHTML.match(cambiaColor)){ //decia que textoEscrito no era una funcion porque no puse el innerhtml
            textoEscrito.style.background = "green"; 
            return true;
        } else {
            return false;
        }
    };

    encuentra(/*prompt("Que palabra quieres encontrar?: ")*/); // le pide al usuario un texto y busca en el div[5]        

        // ******************ENCONTRAR UNA PALABRA CON new RegExp utilizando variables******************
    /*
        var z = new RegExp(prompt("Dame una palabra: "),"gi");
        var str = "hola como estas"
        console.log("respuesta: ", str.match(z));
    */

    // ****************** PONER UN RELOJ A LA PAGINA ******************

    var elementoReloj = document.createElement("h4");
    var reloj = divs[1];

    function horaActual() {
        var horario = new Date();
        let horas = horario.getHours();
        let minutos = horario.getMinutes();
        let segundos = horario.getSeconds();
        reloj.innerHTML =horas + ":" + minutos + ":" + segundos;
        
    }
     setInterval(horaActual,1000);
    
});


