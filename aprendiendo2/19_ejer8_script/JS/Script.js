/* CURSO DE HISTORIA */

// CONSTANTES
const CREDITOS = 3,
  P1 = 0.3,
  P2 = 0.3,
  PF = 0.4;

// FUNCIONES

// MAIN

let nota_p1 = 4.1,
  nota_p2 = 4,
  nota_ef = 4.1;
let promedio = 0;
let producto = 0;

promedio = nota_p1 * P1 + nota_p2 * P2 + nota_ef * PF;

producto = promedio * CREDITOS;

console.log("Acumulado de Historia", producto);