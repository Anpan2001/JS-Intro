/*

Arreglos (arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.




*/

//Formas de declarar un array
//Corchetes.
var miArray = [1, 2, 3, 4, 5, 6];
//Variable sin inicializar 
var colores;

//Array sin variable
["azul", "rojo", "naranja", "verde"];


//variable colores declarada e inicializada
var colores = ["azul", "rojo", "naranja", "verde"];
//Cada asignatura esta asociada a una variable individual
//Puede haber diferentes tipos de datos en un mismo arreglo
var datosdeFelipe = ["Felipe", 31, "GDL", "Nikky", true, undefined, null];

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3 = "Fisica";


//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(typeof (asignaturas));

//Acceso a elementos de un arreglo
console.log("E1 elemento en la posicion 2 de mis asignaturas es: ",
    asignaturas[10]);

//Mostrar la longitud de mi arreglo
console.log(asignaturas.length);

//Ejemplos de arrays

var carrito = ["pantalón", "camisa", "corbata"];
var publicación = ["Fel", 137, "29052023"];

//Modifiar lo que hay dentro de un array

publicación[1] = 138;
console.log(publicación);
//No teníamos un valor en la pos 4
publicación[4] = 150;
//Agregar elementos al final de un array
asignaturas.push("Inglés");

console.log(asignaturas);

//Eliminar el último elemento de un array
asignaturas.pop();

asignaturas.unshift("Quim", "E.F.", "Artes");
console.log(asignaturas);
//Eliminar elemento al inicio de un array
asignaturas.shift();
console.log(asignaturas);

//Encontrar elemento específico

let carritoDeCompras = ["leche", "soda", "cereal", "galletas"];
console.log(carritoDeCompras.includes("coquita"));

if (regalo === true) {
    console.log("Te ganastes");
}

var panas = ["Felipe", "Mariana", "Fernanda"];
var mejoresAmigos;
var público;

if (amigos) {
    console.log("Hola");
}

//Método para concatenar arreglos

var listaDeGolosinas = ["Dulce1", "Dulce2", "Dulce3"];
var listaDeFrutasyVerduras = ["Brocoli", "Manzana", "Zanahoria",];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas);

console.log(listaDeComprasDeLaQuincena);
console.log(listaDeGolosinas, listaDeFrutitasYVerduritas);


//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("Chicharrones"));

console.log("Resumen de compra");
//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join(" *** "));
