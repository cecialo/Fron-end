// Condicional Simple

let nota = 7;
let calificacion = "";

// nota = prompt("Ingresa tu nota"); // Devuelve texto
// nota = parseFloat(nota);

console.log("He realizado mi examen");

if (nota < 5) {
  // 0 hasta 5
  calificacion = "Insuficiente";
} else if (nota < 6) {
  // 5
  calificacion = "Suficiente";
} else if (nota < 8) {
  // 6 y 7
  calificacion = "Bien";
} else if (nota <= 9) {
  // 8 y 9
  calificacion = "Notable";
} else {
  // 10
  calificacion = "Sobre saliente";
}

console.log("Mi nota es ", nota);
console.log("Estoy ", calificacion);

//Utilizando operador ternario