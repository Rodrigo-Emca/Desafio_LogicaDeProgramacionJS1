//2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

//Creamos la variable titulo y asignamos dentro el h1 del html, usando el metodo document.querySelector.
let titulo = document.querySelector('h1');
//Llamamos a la variable titulo y con el método html, le asignamos un contenido.
titulo.innerHTML = "Hora del Desafio";

//3. Crea una función que muestre en la consola el mensaje "El botón fue clickeado" siempre que se presione el botón "Console".

function alertaDeClick() {
    console.log("El botón fue clickeado")
}