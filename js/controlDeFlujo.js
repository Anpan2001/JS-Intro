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
    console.log("Pásele")
} 