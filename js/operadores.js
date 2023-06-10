/* 
Operadores
Los operadores nos permiten realizar una operación en uno o varios operandos (variables o datos)

・De asignación
・de Comparación
・Lógicos
・De cadena
・Aritméticos
*/

//Asignación
let edadFelipe = 31;
var recipiente = "café";


/*
De comparación (>, < >=, <=, ==, ===, !=, !==)
Nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relación de sus valores.
*/
let numUno = 13;
let numDos = 25;
let numTres = "50 mg";
let veinticinco = 25;

//Menor que
console.log("El valor 13 es menor al valor 25? " + (numUno < numDos));
//Mayor que
console.log("El valor 13 es mayor al valor 25? " + (numUno > numDos));
//Mayor o igual que
console.log("El valor 25 es mayor o igual al valor 25? " + (numDos >= numTres));
//Igualdad
console.log("El valor 25 es igual al valor 25? " + (numDos == numTres));
//Igualdad estricta
console.log("El valor 25 es igual al valor 25? " + (numDos === numTres));

console.log("El valor 25 es igual al valor 25? " + (25 === "veinticinco"));

//Desigualdad
console.log("El valor 13 NO es igual al valor 25? " + (numUno !== numDos));
//Desigualdad estricta
console.log("El valor 25 NO es igual al valor 25? " + (numDos !== numTres));

/*
Lógicos (&& (and), ||(or), !(not)
Nos devuelven un resultado a partir de que se cumpla o no una condición. El resultado será un valor boolean y sus operadores son lógicos o asimilables entre ellos (se pueden combina y poner en un orden específico)

&& Para determinar si dos expresiones son verdaderas o falsas.
|| Si alguna de dos expresiones son verdaderas o falsas. 
! Para mostrar lo contrario a lo que estamos devolviendo
*/

var num1 = 12;
var num2 = 24;

afirm1 = (num1 > num2);
afirm2 = (num1 != num2);
console.log(afirm1 && afirm2);

afirm3 = (num1 < num2);
afirm4 = (num1 !== num2);
console.log(afirm3 || afirm4);

console.log(!afirm3);

number1 = 12;
number2 = 24;
number3 = 25;
number4 = 92;
number5 = 91;

op = (number1 < number2 || number2 < number3) && (!(number1 != number2) && number5 != number3);
console.log(op)

op2 = (number5 > number2 && number4 < number3) || (!(number1 === number2) || number3 != number3);
console.log(op2)

// 1. 91 mas que 24 asi que TRUE; 92 menos que 25 así que FALSE un false entonces FALSE;;;; 12 estrictamente igual a 24 es falso pero opuesto TRUE; FALSE;;;;; TRUE


/*
Aritméticos (+, -, *, /, %, **, ++, --)
*/

let valorWan = 55;
let valorTu = 17;

console.log("Suma:", valorWan + valorTu);
console.log("Resta:", valorWan - valorTu);
console.log("Multiplicación:", valorWan * valorTu);
console.log("División:", valorWan / valorTu);
console.log("Residuo:", valorWan % valorTu);
console.log("Incremento:", ++valorTu);
console.log("Decremento:", --valorTu);

/*
El IMC resulta a de la división de la masa del individuo (en kg) entre el cuadrado de la estatura (en metros). El índice de masa corporal es un indicador del peso de una persona en relación con su altura. 
Clasificación del IMC de acuerdo con la OMS de la ONU:
・Menor a 16: Criterio de ingreso.
・16 a 16.9: infrapeso.
・17 a 18.4: bajopeso
・18.5 a 24.9: peso normal.
・25 a 29.9: sobrepeso
・30 a 34.9: obesidad premórbida
・50 a 45: obesidad mórbida
・Mayor a 45: obesidad hipérmorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la person a y la categoría en la cual fue clasificado.
*/

let pesoLibras = prompt("Ingrese su peso en libras");
let estaturaCM = prompt("Ingrese su estatura en centímetros");

function calculoIMC() {
    pesoKG = pesoLibras * 0.453592;
    estaturaMetros = estaturaCM / 100;
    indiceMasa = pesoKG / (estaturaMetros ** 2);
    console.log("Su peso en kilogramos es:", pesoKG);
    console.log("Su estatura en metros es:", estaturaMetros);
    console.log("Su IMC es", indiceMasa);
    if (indiceMasa < 16) {
        console.log("Criterio de ingreso");
    } else if (indiceMasa >= 16 && indiceMasa <= 16.9) {
        console.log("Infrapeso");
    } else if (indiceMasa >= 17 && indiceMasa <= 18.4) {
        console.log("Bajopeso");
    } else if (indiceMasa >= 18.5 && indiceMasa <= 24.9) {
        console.log("Peso normal");
    } else if (indiceMasa >= 25 && indiceMasa <= 29.9) {
        console.log("Sobrepeso");
    } else if (indiceMasa >= 30 && indiceMasa <= 34.9) {
        console.log("Obesidad premórbida");
    } else if (indiceMasa >= 35 && indiceMasa <= 45) {
        console.log("Obesidad mórbida");
    } else if (indiceMasa > 45) {
        console.log("Obesidad hipérmorbida");
    }
}

calculoIMC();
