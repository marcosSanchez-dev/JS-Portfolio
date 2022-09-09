
//guardo el ID html de cada tecla del piano
const keys = ['c-key','c-sharp-key','d-key','d-sharp-key','e-key','f-key','f-sharp-key','g-key','g-sharp-key','a-key','a-sharp-key','b-key','high-c-key'];

//Ahora usos esos ID's para seleccionarlos en el dom, y guardar los elementos en un nuevo array

const domNotes = [];
keys.forEach(key => domNotes.push(document.getElementById(key)));

/*
Ya que tenemos seleccionados nuestros elementos en el DOM
ahora agregamos las funciones para  cada tecla 
*/

function redBG(e) {
    e.target.style.background = 'red';
    console.log(e);
}
function normalBG(e) {
    e.target.style.background = '';
}

function keyPress(note) {
    note.onmousedown = redBG;
    note.onmouseup = normalBG;
}

domNotes.forEach(keyPress);