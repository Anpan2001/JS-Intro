/* 1. Obtener los elementos del HTML para guardarlos en variables
Almaceno el lugar de destino de mi tarjeta en una constante*/
const container = document.getElementById("productContainer");
const agregarProductos = document.getElementById("addGoods");
/*2. Quiero que cada tarjeta tenga su propio div/contenedor*/

let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");

function sumarBienes() {
    //Almacenar elementos del formulario en variables de JS

    //Guardo los valores de mis inputs
    let valorInputProducto = nombreProducto.value;
    let valorInputDescripción = descripcionProducto.value;
    let valorInputImagen = imagenProducto.value;

    //Creo el elemento
    const productCard = document.createElement("div");
    productCard.innerHTML = `
<img src="${valorInputImagen}" alt="Producto">
<h3>${valorInputProducto}</h3>
<p> Descripción: ${valorInputDescripción}</p>
<p> Precio: $9.99</p>
<button class="btn">Agregar al carrito</button>
`;

    //Agregar esa tarjeta de producto al container especificado
    container.appendChild(productCard);
}

agregarProductos.addEventListener("click", sumarBienes);     