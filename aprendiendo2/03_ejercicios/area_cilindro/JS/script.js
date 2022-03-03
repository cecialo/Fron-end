//formula: area_circulo = π * radio 2
//Algoritmo : area del circulo
//Entrada: radio (r), altura(h)
//Salida: area del circulo

//Inicializacion
r = 0.0;
h = 0.0;
pi = 3.14;

//solicita  la información al usuario
r = prompt("Ingrese la radio");
console. log(typeof r);
r = parseFloat(r);
console. log(typeof r);

h = prompt("Ingrese la altura");
h = parseFloat(h);

console. log("Radio", r);
console. log("Altura", h);

//Cálculo del area del circulo
alert(2 * pi * r * h);