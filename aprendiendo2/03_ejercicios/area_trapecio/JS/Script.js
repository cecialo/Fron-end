//Algoritmo : area del trapesio
//Entrada: Base inferior (bi), base superior(bs), altura(h)
//Salida: area del trapecio

//Inicializacion
bi = 0.0;
bs = 0.0;
h = 0.0;
a = 0.0;

//solicita  la información al usuario
bi = prompt("Ingrese la base inferior");
console. log(typeof bi);
bi = parseFloat(bi);
console. log(typeof bi);

bs = prompt("Ingrese la base superior");
bs = parseFloat(bs);

h = prompt("Ingrese la altura");
h = parseFloat(h);

console. log("Base Inferior", bi);
console. log("Base Superior", bs);
console. log("Altura", h);

//Cálculo del area del trapecio
alert((bi + bs) * h / 2);