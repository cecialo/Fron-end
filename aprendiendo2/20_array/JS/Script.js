//forma tradicional
let array = new Array("a", "b", "c");
console.log(array);

let cadena_de_texto = 'Mi perro dijo"Guau"';

//mediante lioterales (preferidas)
let literal =["a", "b", "c"];//arreglo de 3 elementos
console.log(literal);

//inicializar un arreglo
let empty = []; //arreglo vacio(0)
console.log(empty);

let mixto = ["texto",123,true];//arreglo mixto
console.log(mixto);

//let number = 123;
//console.log(typeof number)//para saber los datos
//obj  .  metodo
console.log();

//              0          1           2          3
let razas = ["poodle", "labrador", "terrier", "shihtzu"];
razas[0];//poodle
razas[1];//labrador
razas[2];//terrier
razas[3];//shihtzu
console.log(razas[4]);
razas[3]; // shihtzu   4 <= length
razas[4]; // undefined
razas[5]; // undefined
const nro_razas = razas.length; // 4
// 4 - 1 = 3
razas[nro_razas - 1]; //
//      4         -  1  = 3
razas[razas.length - 1]; // shihtzu

//adelantando mas si queremos un poco (objetos)

//propiedad o atributo -> obj.propiedad
//funcion o metodo -> obj.funcion()
let num_razas = razas.length;
console.log("numero de razas", num_razas);


/*  AÑADIR O ELIMINAR ELEMENTOS */

// Bajara de 4 cartas (cara hacia arriba)
let baraja = ["5 picas", "J Diamante", "5 trebol", "A corazones"];

console.log(baraja); // ['5 picas', 'J Diamante', '5 trebol', 'A corazones']
baraja.push("Q corazones"); // añadir una carta a la pila (desde arriba)
console.log(baraja); // ['5 picas', 'J Diamante', '5 trebol', 'A corazones' , 'Q corazones']

let carta = baraja.pop(); //  Quito la ultima carta (Q de corazones)
console.log(carta); // Q corazones

let carta2 = baraja.pop(); //  Quito la ultima carta (A de corazones)
console.log(carta2); // A de corazones

console.log("Ahora tengo", baraja); // ['5 picas', 'J Diamante', '5 trebol']

baraja.unshift("3 diamante"); // quitar una carta desde principio (Abajo)

console.log("Despues añadir al comienzo", baraja); //['3 diamante', '5 picas', 'J Diamante', '5 trebol']

let carta3 = baraja.shift(); // quitamos una carta del comienzo (Abajo)
console.log(carta3); // 3 diamante

let carta4 = baraja.shift(); // quitamos una carta del comienzo (Abajo)
console.log(carta4); // 5 picas


/*  PUSH Vs CONCAT */

let barajaA = new Array(
    "A diamantes",
    "4 corazones",
    "2 trebol",
    "4 de trebol"
  );
  let barajaB = new Array("5 diamantes", "Q trebol", "8 corazones");
  
  // USANDO PUSH()
  
  // barajaA.push(barajaB) // => genera un array dentro de otro array
  // barajaA.push(["5 diamantes", "Q trebol", "8 corazones"])
  // console.log(barajaA);
  
  // USANDO CONCAT()
  
  let barajaC = barajaA.concat(barajaB);
  
  console.log("Baraja A", barajaA);
  console.log("Baraja B", barajaB);
  console.log("Baraja C", barajaC);
  
  
// USANDO PUSH()

// barajaA.push(barajaB) // => genera un array dentro de otro array
// barajaA.push(["5 diamantes", "Q trebol", "8 corazones"])
// console.log(barajaA);

// USANDO CONCAT()

let barajaC = barajaA.concat(barajaB);

console.log("Baraja A", barajaA);
console.log("Baraja B", barajaB);
console.log("Baraja C", barajaC);

// CREANDO SUB ARRAYS => Slice Vs Splice

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Grape",
  "Orange",
  "Pear",
  "Cherry",
];
/* Extrayendo los elementos desde la posicion 2 hasta 5  */
let sliced_frutas = fruits.slice(2, 5);
console.log(fruits); // El array no sufre modificaciones
console.log(sliced_frutas); //  ["Mango","Grape","Orange"]

/* Extrayendo 3 elementos desde la posicion 2  */
// let spliced_fruits = fruits.splice(2, 3);
// console.log(fruits);
// console.log(spliced_fruits);

/* Extrayendo 3 elementos desde la posicion 2 y en el espacio vacio añadimos "Melon"  */
let spliced_fruits = fruits.splice(2, 3, "Melon");
console.log(fruits);
console.log(spliced_fruits);
