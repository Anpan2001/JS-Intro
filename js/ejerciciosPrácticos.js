function velocidad(a, b) {
    var vel = a / b;
    console.log("La velocidad es " + vel);
}

function formGen(a, b, c, equisUno, equisDos) {
    var equisUno = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var equisDos = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    console.log("x1 = " + equisUno);
    console.log("x2 = " + equisDos);
}

velocidad(87, 3);
formGen(2, 9, 10);