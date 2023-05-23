console.log(mamaDeBambi);

var cuchara = "cuchara"
let recipiente = "agua";
recipiente = "café";
recipiente = "jugo";
recipiente = "leche";

console.log(recipiente);

/* 
salimos;
edad;
altura;
peso;
género;

・String - valores en forma de texto, usar ya sean comillas simples, dobles o backticks
・Number - valores numéricos, no usa comillas
・Boolean - valores tipo true o false
・Undefined - datos sin valor; variables sin inicializar
・Null - definir que un valor es nulo de forma intencional
・Symbol 
・NaN (Not@Number) - valores que no son números
・Object (no primitivo)
*/

apodoDeFelipe = "Octavo 'Hokage'";
console.log(apodoDeFelipe);

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = 2340.56

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

esAdmin = true;
contraseñaCorrecta = true;
cuentaPremium = false;

console.log(esAdmin);
console.log(contraseñaCorrecta);
console.log(costoDeUnGansito);

/*
respuestaDeCrush; //Undefined
precioBoletoParking; //Undefined
console.log(precioBoletoParking);
*/

respuestaDeCrush = "no";
respuestaDeCrush = null;
respuestaDeCrush = "si";
console.log(respuestaDeCrush);
//------- 
operación = 0 / 0;
console.log(operación)

//TypeOf
console.log(typeof (esAdmin));
console.log(typeof (edadDeFelipe));

/*
Sesión tipos de variables
・var Era la forma principal de declarar variables: Flexible y con alcance global. Una variable de este tipo está disponible en todo el programa.
・let Para limitar el scope: Sí limita a un bloque o expresion. No redeclarable
・const Valor constante o inmutable
*/

//En este caso mamaDeBambi está disponible en cualquier lugar del programa
var mamaDeBambi = false;
var cazador = "Preparado"
const pi = 3.1415;
let descuentoNovedad = 10;

/*
Función
Agrupación de instrucciones que se ejecutan al invocar dada función. Reciben parámetros y devuelven valores. No se "ejecuta", se invoca.

Parametros = variables necasarias para alimentar a la función

Ejemplo: Ingredientes para preparar algo

Nombre de la función = Con el nombre podremos invocar la función

Operaciones = Conjunto de instrucciones en orden específico
Ejemplo: 1) Cortar limón, 2) Exprimir, etc.

Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vaso agua de limón
*/

function prepararAwaLimón(limón, agua, hielos, azúcar, vaso, cuchara) {
    var limón = "limón";
    var agua = "awa";
    var hielos = "yelos";
    var azúcar = "azúcar";
    var vaso = "vaso";
    var cuchara = "tenedor";

    console.log("Cortar" + limón);
    console.log("Exprimir");
    console.log("Agregar jugo" + vaso);
    console.log("Agregar yelos" + hielos);
    console.log("Agregar awa" + agua);
    console.log("Endulzar" + azúcar);
    console.log("Mezclar" + cuchara);
    console.log("Disfrutar");
}

console.log(cuchara);
//Met. 1 Declarar var dentro de la función
function suma(a, b) {
    var a = 5;
    var b = 7;

    operación = a + b;

    console.log(operación);
}

suma();
//Met. 2 Usar parámetros dentro de paréntesis ya inicializados
function resta(a = 8, b = 5) {
    operación = a - b;
    console.log(operación);
}

resta();
//Met. 3 Inicializamos valores en la invocación
function multiplicación(a, b) {
    operación = a * b;
    console.log(operación);
}

multiplicación(3, 9);
multiplicación(5, 2);
multiplicación(4, 64);
multiplicación(32, 5);
multiplicación(5, 32);
multiplicación(6, 98);
multiplicación(78, pi);

//Funciones anónimas

let Anón = function (a, b) {
    operación = a / b;
    console.log(operación);

}

Anón(10, 5);

/*      
Return
La sentencia return finaliza la ejecución de la función, y especifica un valor para ser devuelto a quien llama a la función. O lo que es lo mismo, usamos return para finalizar y también para poder asignar el resultado a una variable
*/

let nombre = prompt("Ingresa tu nombre")

function saludo() {
    console.log("Hola " + nombre + "!");
    return nombre;
}

let nombreFunción = saludo(nombre);

console.log("Personas que iniciaron sesión hoy: " + nombreFunción);