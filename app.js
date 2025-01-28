//2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

//Creamos la variable titulo y asignamos dentro el h1 del html, usando el metodo document.querySelector.
let titulo = document.querySelector('h1');
//Llamamos a la variable titulo y con el método html, le asignamos un contenido.
titulo.innerHTML = "Hora del Desafio";

//3. Crea una función que muestre en la consola el mensaje "El botón fue clickeado" siempre que se presione el botón "Console".

function alertaDeClickConsola() {
    console.log("El botón fue clickeado")
}

//4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function alertaPromt() {
    let ciudad = prompt('Escriba el nombre de alguna ciudad de Brasil');
    //Para usar la concatenación en js, entrecomillamos parte de la frase, luego + y la variable.
    alert("Estuve en " + ciudad + " y me acordé de ti.");
    /*Tambien podemos usar ${variable} pero el texto entero debe estar entre backticks (`)
    
    alert(`Estuve en ${ciudad} y me acordé de ti.`);

    */
}