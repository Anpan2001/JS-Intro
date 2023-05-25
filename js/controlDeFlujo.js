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
if (hora < 12){
    console.log("Gu mornin");
} else if (hora <=19){
    console.log ("Wenas tardes");
} else{
    console.log("A mimir");
}