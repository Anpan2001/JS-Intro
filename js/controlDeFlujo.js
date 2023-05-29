/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales


Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones. 


Ejemplo

Tengo limpia mi playera de la suerte?  //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion



*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/

//Felipe tiene 17 años y quiere ir a una fiesta. Dicha fiesta es sólo para personas mayores de 18 añños. Ayuda a Felipe a decidir si puede ir a la fiesta o no.

let edadFelipe = 17; //Tomamos en cuenta la edad de Felipe
let edadPermitida = 18;

if (edadFelipe < edadPermitida) {
    console.log("Lo siento Felipe, no se armó.");
}

let edadAxel = prompt("Ingresa tu edad");
let edadAcesso = 18;

if (edadAxel < edadAcesso) {
    console.log("Lo siento, no puedes entrar");
} else {
    console.log("Pásele");
}

/*
Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas
}


Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion.


edadDeDavid = 19;
edadPermitida = 18;
dineroDeDavid = 20;
coverDelAntro = 150;

if (edadDeDavid > edadPermitida){
    console.log "Pasa rey.";
} else if (dineroDeDavid > coverDelAntro){
    console.log("David, puedes entrar.");
} else {
    console.log("No acabalas.");
}
*/

let hora = prompt("Ingrese la hora actual");
if (hora < 12) {
    console.log("Gu mornin");
} else if (hora <= 19) {
    console.log("Wenas tardes");
} else {
    console.log("A mimir");
}

/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

*/

let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5)");

switch (pisoDestino) {
    //para jugar con nuestros casos, el tipo de dato debe coincidir para que se ejecute correctamente

    case "1":
        console.log("Vamos a piso 1");
        comprar();
        break;

    case "2":
        console.log("Vamos a piso 2");
        vender();
        break;

    case "3":
        console.log("Vamos a piso 3 (suena musica de elevador de fondo)");
        break;

    case "4":
        console.log("Vamos a piso 4 (suena musica de elevador de fondo)");
        break;

    case "5":
        console.log("Vamos a piso 4 (suena musica de elevador de fondo)")
        break;

    default:
        console.log("lngresaste un piso que no es valido");
}

//Eevee
var elementoEvolución = prompt("Ingresa el elemento con el que evolucianarás a tu Pokémon")

switch (elementoEvolución) { 
    case "piedraFuego":
        console.log("Tu Eevee ha evolucionado a Flareon");
        break;

    case "piedraTrueno":
        console.log("Tu Eevee ha evolucionado a Jolteon");
        break;
}

//Horóscopo

var signoZodiacal = propmt