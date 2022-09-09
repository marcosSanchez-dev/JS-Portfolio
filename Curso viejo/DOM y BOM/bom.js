'use strict'

// Browser object model 

window.addEventListener("load", ()=>{ // INICIO LOAD, sirve ara cargar tu script en el HEAD del HTML

    console.log(window.innerWidth); //tambien funciona screen.width
    console.log(window.innerHeight); // da el resultado en pixeles
    console.log(window.location.href); // te da la url en la que estas pero puedes cambiarla para redirigir

    function redireccion(url){ //en la consola me puede redirigir a una nueva url
        window.location.href = url;
    }


    function abrirVentana() { //abres una nueva ventana
        var x = window.open("","Nombre","width=400, height=100"); //window.open(URL, name, specs, replace)
        x.console.log("<p>Si no metes una URL esto es lo que se ve</p>");
    }


    // ***************** EVENTOS: Cambiar el color de un boton y comenzar animacion ******************

    var boton = document.querySelector("#boton");

    boton.addEventListener("click",function () { // con addEventListener puedes hacer una accion al dar click
        cambiarColor();
    });

    boton.addEventListener("mouseover", function () { //cuando el mouse este sobre el elemento con ID #boton
        boton.style.fontSize = "2em";
    })
    boton.addEventListener("mouseout", function () { //cuando el mouse este sobre el elemento con ID #boton
        boton.style.fontSize = "1em";
    })


    function cambiarColor() {
        let backgroundBoton = boton.style.background;
        let j = document.getElementById("identificador");

        if( backgroundBoton == "green"){
            boton.style.background = "red";
            j.style.animationName = "mymove"; // No logre que la animacion se reiniciara
        }else{
            boton.style.background = "green";
            j.style.animationFillMode = "both";
            return true;
        }
        
    }

    // ********** EVENTO FOCUS ************

    var cajaTexto = document.querySelector("#campo_nombre");

    cajaTexto.addEventListener("focus", function(){ // Le pongo un borde rojo a mi caja de texto cuando la selecciono
        cajaTexto.style.border = "thick solid rgb(255,0,0)";
        cajaTexto.style.borderStyle = "dashed";
    });

    // ********** EVENTO BLUR ************

    cajaTexto.addEventListener("blur", function(){ // Le pongo un borde negro a mi caja de texto cuando no la selcciono
        cajaTexto.style.border = "thick solid rgb(0,0,0)";
        cajaTexto.style.borderStyle = "dotted";
    });

    // ********** EVENTO Keywdown ************

        
    cajaTexto.addEventListener("keydown", function (event) { // Ocurre algo cuando presionas una tecla
        console.log("</br> presiono esta tecla", String.fromCharCode(event.keyCode));
    });


    // ********** EVENTO Keywup ************

    cajaTexto.addEventListener("keyup", function (event) { // Ocurre algo cuando presionas una tecla
        console.log("</br> dejo de presionar esta tecla", String.fromCharCode(event.keyCode));
    });

    // ********** EVENTO setInterval y setTimeout ************

        function estrobo() {

        var tiempo = setInterval(function (){   // setTimeout hace que la funcion se ejecute una vez en el tiempo que le especificamos y ya
            let h = document.getElementById("identificador");

            if( h.style.background == "" ){
                h.style.background = "blue";
            }else{
                h.style.background = "";
            }
            },500);  // Estoy cambiando el color cada 250 milisegundos
            return tiempo;
        }

        var nuevaVariable = estrobo();

        // ********** EVENTO clearInterval()************

        var stop = document.getElementById("stop");

        stop.addEventListener("click", ()=>{
            console.log("sstop!!"); // solo logre que se detuviera en en el primer click
            clearInterval(nuevaVariable);
        });

        var start = document.getElementById("start");
        start.addEventListener("click", ()=>{ //cuando des click a "start" que pase esto
            console.log("start!");
            estrobo();
        });

}); // END LOAD, sirve para cargar tu script en el HEAD del HTML