/*
Desafíos:
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function holaMundo() {
    console.log('¡Hola mundo!')
}

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludoPersonalizado() {
    //console.log('HOLA');
    let nombre = prompt('Ingresa tu nombre');
    return console.log("¡Hola " + nombre + "!")
}

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleNumero() {
    //console.log('Numeros Dobles')
    let numeroRecibido = parseInt(prompt('Ingresa un número:'))
    return console.log(numeroRecibido * 2);
}

//dobleNumero()

// Para que reciba el numero como parametro, tambien se puede hacer de la siguiente forma:

/* 
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);
*/

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularTriple(numero1, numero2, numero3) {
    return console.log(promedio = (numero1 + numero2 + numero3) / 3 );
}

let resultadoPromedio = (calcularTriple(20,5,20))

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);

  // 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

  function alCuadrado(numeroBase) {
    return numeroBase * numeroBase;
  }

  let numeroAlCuadrado = alCuadrado(2)
  console.log("Número al cuadrado: " + numeroAlCuadrado)