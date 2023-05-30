/*
En una carrera se tienen los siguientes corredores con su respectiva posición:
Primer lugar: Roberto
Segundo lugar: Andrea
Tercer lugar: Jorge
Cuarto lugar: Ramiro
Quinto lugar: Sofía
Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y
Roberto se lesiona y sale de la carrera. Además, Andrea baja una posición, Ramiro
mantiene su lugar y el quinto lugar es reemplazado por José.
¿Cómo quedan las posiciones después de esas 3 vueltas?*/

var corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
//Jorge adelanta a Roberto
corredores.splice(corredores.indexOf("Jorge"), 1);
corredores.splice(corredores.indexOf("Roberto"), 0, "Jorge");
//Ramiro adelanta a Jorge
corredores.splice(corredores.indexOf("Ramiro"), 1);
corredores.splice(corredores.indexOf("Jorge"), 0, "Ramiro");
//Roberto muere
corredores.splice(corredores.indexOf("Roberto"), 1);
//Andrea baja
function andreaBaja(nuevaPos) {
    nuevaPos = ((corredores.indexOf("Andrea") + 1));
    corredores.splice(corredores.indexOf("Andrea"), 1);
    corredores.splice(nuevaPos, 0, "Andrea");
}
andreaBaja()
//José reemplaza el quinto lugar
corredores.push("José");
console.log("Posiciones después de 3 vueltas:", corredores);