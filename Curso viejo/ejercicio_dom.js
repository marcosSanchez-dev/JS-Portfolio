'use strict'

window.addEventListener("load",()=>{

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit", ()=>{ // Accion del boton submit

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = document.querySelector("#edad").value;

    box_dashed.style.display = "block";
    var arregloDatos = [nombre,apellidos,edad];

    for(var i in arregloDatos){
        var parrafo = document.createElement("p");
        parrafo.append(arregloDatos[i]);
        box_dashed.append(parrafo);
    }

    });


}); // Final del LOAD event listener