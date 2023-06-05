/*DOM

Cuando aprendemos a crear páginas web, normalmente comenzamos con la construcción de sitios que están estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras páginas son estáticas. Si nosotros queremos convertir estas páginas a páginas dinámicas, debemos agregar JavaScript a la ecuación. Debemos recordar que cuando hablamos de páginas dinámicas, nos referimos a páginas que cambian de acuerdo a los datos que nos envíe el usuario, esto con el fin de brindar una experiencia mucho más completa, además de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogía con un árbol, donde el DOM es el árbol y cada una de las etiquetas del HTML es un nodo o rama, además de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber qué es lo que está dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de árbol, que podremos modificar de forma rápida y dinámica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras páginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el ratón, pulsar un botón, hacer clic en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a través del navegador y podemos visualizarlo como un gran árbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de árbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elementos del DOM 
Todos los elementos del DOM se consideran nodos.

-Documents (Es el nodo raíz)
-Element (Todas las etiquetas de HTML)
-Texto (Textos que estén adentro de las etiquetas)
-Atributos (Todos los atributos que pueden llegar a tener las etiquetas)
-Comentarios (Todos los comentarios del documento)

Comunicación entre HTML y JS utilizaremos nuestros amigos selectores 

Métodos de selección de elementos 
Son elementos que nos van a permitir seleccionar uno o varios elementos o grupos de ellos del DOM. Estos métodos se utilizan en el documento, por eso se agrega un document.getElement

//getElementByID: busca elementos por su id
//getElementByClassName: busca por elementos por su clase
//getElementByTagName: busca elementos por su Tag name
*/

let parrafo = document.getElementById("parrafo1");

parrafo.innerHTML = "Hola Felipe, bienvenido. Puedes comprar :D";

/*se pueden modificar su estilo sin tener que ir a CSS*/
parrafo.style.color = "blue";

console.log(parrafo);
/*Esto se interpreta como objeto*/
console.log(typeof parrafo);

var parrafitos = document.getElementsByClassName("parrafos");
console.log(parrafitos);

var parrafosEtiqueta = document.getElementsByTagName("p");

console.log(parrafosEtiqueta);

var parrafoQuerySelector = document.getElementsByTagName("p");
console.log(parrafoQuerySelector);

var parrafoQuerySelector = document.querySelector("#parrafo1");
var parrafoQuerySelectorAll = document.querySelector(".parrafos");

console.log(parrafoQuerySelectorAll);

/*function colorChange(color){
    parrafo.style.color = color;
} 
*/

const botanColorCh = document.querySelector("#colorChange");

botanColorCh.addEventListener("click", function () {
    alert("Presionaste el botón");
});

const div = document.createElement("div");
document.body.appendChild(div);

var appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt = "Imagen Sorpresa";

div.appendChild(appendImg);