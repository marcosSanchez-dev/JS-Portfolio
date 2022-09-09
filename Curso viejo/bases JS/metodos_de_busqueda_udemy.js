
METODOS DE BUSQUEDA:

.toString();  --> convierte los objetos a string
.toUpperCase(); --> toda las letras a mayusculas
.toLowerCase(); --> Todas las letras a minusculas
.length; --> cuenta el numero de caracteres en una string o items en una lista
.concat(); --> concatena lo que este dentro del parentesis
.indexOf(); & .search(); --> encuentra la primera coincidencia de la palabra a buscar, regresa la posicion en numero
.match(/ /g); --> encuentra las palabras en un texto y las convierte en una lista, eso se imprime en la consola
.substr( , ); --> imprime los caracteres en el rango que le indiquies, por ejemplo (14,5) dice: dame las siguientes 5 letras desde el index 14 
.charAt(); --> imprime una sola letra de un texto, se lo indicas con el indice
.startsWith(); --> te da true o false si la cadena de texto comienza con el parametero que le pediste, por ejemplo, (Hola, como estas) .startsWith(Hola) es true! 
.endsWith(); --> es lo mismo que .startsWith() pero te da ture o false si el final de la cadena tiene lo que le pediste
.includes(); --> busca la palabra exacta dentro de una cadena de texto, regresa true o false
.replace( , ); --> remplaza el primer parametro ingresado,  por el segundo ingresado.
.slice( , ); -->  Es como un CUT al string. Te devuelve la cadena de texto, desde el indice que le indicas hasta el final o segundo indice que le indicas.
.split(); --> convierte la cadena de texto completa en una lista[], pero si ingreso (" "), quiere decir que usara el espacio como indicador para crear items por separados
.trim(); --> quita los espacios al inicio y al final de una cadena de texto

*/

//------------------------------------------------------------


Metodo match

var x = "Hola como estas como";

var y = x.match(/como/g);

document.write(x);
console.log(y);
document.write("</br>" + typeof y);
document.write( "</br>" + x);

*/

 Metodo replace

var x = "Hola tengo 5 hijos";

var y = x.replace("hijos","HIJAS");

document.write(x);
document.write("</br>" + y);



// PLANTILLAS DE TEXTO:

 var x = prompt("Dame tu Nombre papi: ");

 var y = prompt("Dame tu apellido papi: ");

 var texto = `

 Este es un texto multilinea para probar los templates strings :)

 <h2> Carnalito, tu nombre es: ${x} </h2>

 <h2> Y tu apellido es ${y} </h2> `;

 document.write(texto);

*/

