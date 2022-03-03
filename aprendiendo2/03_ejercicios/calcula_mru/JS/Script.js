//Algoritmo : Calcular MRU
//Entrada: velocidad(v), tiempo (t)
//Salida: distancia

//Inicializacion
v = 0.0;
t = 0.0;

//solicita  la información al usuario
v = prompt("Ingrese la velocidad");
console. log(typeof v);
v = parseFloat(v);
console. log(typeof v);

t = prompt("Ingrese el tiempo");
t = parseFloat(t);

console. log("velocida", v);
console. log("tiempo", t);

//Cálculo de la distancia
alert( v * t);