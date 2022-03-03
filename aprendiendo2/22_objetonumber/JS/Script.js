const n1 = 4;
const n2 = 15.8;

const n3 = new Number("abc");
const n4 = new Number(13.6);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); //false
console.log(Infinity);

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(4.6)); // false

// Stack Over Flow
console.log(Number.isSafeInteger(1e15)); // true
console.log(Number.isSafeInteger(1e16)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false

/* Conversiones */

let text_number = "348.42"; // Cadena (String)

console.log(Number.parseInt(text_number)); // 348
console.log(Number.parseFloat(text_number)); // 348.42

// Bases numéricas

let decimal = 124;
let binario = "1111100"; // base 2
let octal = "174"; // base 8
let hexadecimal = "7C"; // base 16

console.log(Number.parseInt(binario, 2));
console.log(Number.parseInt(octal, 8));
console.log(Number.parseInt(hexadecimal, 16));

// Formatos numéricos
let number = 1.5;

console.log(number.toExponential(2)); // Notacion Científica
console.log(number.toFixed(2));
console.log(number.toPrecision(1)); // Math.round()

// Objetos STRING

const texto1 = "Hola a todos";
const texto2 = "pablito clavó un clavito en la calva de un calvito";

const texto3 = new String("Hola a todos");
const texto4 = new String("Otro mensaje de texto");

console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);

console.log(`El texto: "${texto2}" tiene ${texto2.length} caracteres`);


let frase1 = "Camarón que se duerme se lo lleva la corriente";
let frase2 = "En boca cerrada no entran moscas";
let frase3 = "Feliz como una lombriz";
let frase4 = "De tal palo tal astilla";
let frase5 = "Mal de muchos, consuelo de pocos";
let frase6 = "'¡Chinchilete!', '¡Yo machete!'";
let frase7 = "Mas vale tarde que nunca";
let frase8 = "El pato que no conoce el océano en cualquier charco es feliz";
let frase9 = "Ya nos cayo el chahuistle";
let frase10 = "No hay peor ciego que el que no quiere ver";

console.log(frase3);
console.log(frase3.length);
console.log(frase3.charAt(0)); // 0 - 21
console.log(frase3.charAt(6));
console.log(frase3.charAt(11));
console.log(frase3.charAt(15));

// Utilizaondo concatenadores
console.log(frase7);
frase7 = frase7.concat(" que");
frase7 = frase7 + " tonto";
frase7 = `${frase7} que no `;
frase7 += "lo haga";

console.log(frase7);

let direccion = "Calle Santa Rosa " + 1 + 2 + 3; // Calle Santa Rosa 123
direccion = "Calle Santa Rosa " + (1 + 2 + 3); // Calle Santa Rosa 6
console.log(direccion);


// Buscar la posición de una palabra o letra

frase7 = new String(frase7);
console.log(frase7);

// Busqueda se realiza de arriba hacia abajo
console.log(frase7.indexOf("g")); // 47 posición donde se encuentra la letra "g"
console.log(frase7.indexOf("tonto")); // 29 => posición donde se encuentra la palabra tonto
console.log(frase7.indexOf("taza")); // -1 => No existe dentro de la frase
console.log(frase7.indexOf("que")); // 15
console.log(frase7.indexOf("que", 18)); // 25
console.log(frase7.indexOf("que", 38)); // -1  => no existe en la frase desde la pos 38


// Busqueda se realiza de abajo hacia arriba
console.log(frase7);

console.log(frase7.lastIndexOf("que")); // 35
console.log(frase7.lastIndexOf(" ")); // 35
console.log(frase7.lastIndexOf("que", 24)); // 15

console.log(frase7.lastIndexOf(" ", 32)); // 28

// Busquedas en los strings (Cademna)

console.log(frase10);
console.log(frase10.startsWith("No hay peor")); // true
console.log(frase10.startsWith("Ciego")); // false => La frase no empieza con esa palabra "Ciego" 
console.log(frase10.startsWith("No")); // true
console.log(frase10.startsWith("no")); // false Porque N no es mayuscula


console.log(frase10.endsWith("ver")); // true
console.log(frase10.endsWith("iere ver")); // true;
console.log(frase10.endsWith("kiere ver")); // false;

console.log(frase10.endsWith("ciego", 17)); // No hay peor ciego

console.log(frase10.includes("peor")); // true => Si existe la palabra en la frase
console.log(frase10.includes("chahuistle")); // false => No existe la palabra en la frase


frase1 = new String(frase1);
console.log(frase1);
console.log(frase1.startsWith("Camarón")); // true => Si existe la palabra en la frase
console.log(frase1.search("^Camarón")); // 0
console.log(frase1.endsWith("corriente"));
console.log(frase1.search("corriente$")); // 0

frase9 = new String(frase9);
console.log(frase9.search("^Ya nos cayo el chahuistle$"));

let numero = "163";
console.log(numero.search("^[0-9]*$")); // Valida todos sean numeros
console.log(numero.search("^[0-9][0-5][0-9]$")); // Valida 3 primeros caracteres sean numeros pero el segundo solo hasta el 0-5

// Transformaciones de texto
let texto = "  Amor  ";

console.log(texto.repeat(3));
console.log(texto.toLowerCase()); // Minusculas  (text-transform : lowercase)
console.log(texto.toUpperCase()); // Mayusculas  (text-transform : uppercase)
console.log(texto.trim());

let frase_palindromo = "anita lava la tina"; // literal
frase_palindromo = new String("anita lava la tina"); // Objeto

console.log(frase_palindromo);

console.log(frase_palindromo.replace("lava", "{replaced}"));
console.log(frase_palindromo.replaceAll("la", "{replaced}"));


let frase = new String("la ruta nos aporto otro paso natural");

console.log(frase);

console.log(frase.substr(19)); // otro paso natural
console.log(frase.substr(29, 7)); // natural


// Mini aplicacion de transformaciones
let direccion = new String("Urb los patos 305");
console.log(direccion);
let numero_casa = direccion.substr(14, 3); // 305
numero_casa = direccion.substr(direccion.search("305"), "305".length); // 305

position = direccion.search("305"); // 14
console.log("numero de case : ", parseInt(numero_casa));

// Substring() vs Substr()

let palindromo2 = new String("a luna ese anula");
console.log(palindromo2);

console.log(palindromo2.substring(7)); // ese anula
console.log(palindromo2.substring(11, 16)); // anula

console.log(palindromo2.substr(2, 4)); // luna
console.log(palindromo2.substring(2, 4)); // lu (Cuidado)
console.log(palindromo2.substring(2, 6)); // luna

// Convertir string a arreglo (Array)

let palindromo3 = new String(
    "A mamá, Roma le aviva el amor a papá, y a papá, Roma le aviva el amor a mamá"
  );
  console.log(palindromo3);
  
  console.log(palindromo3.split(",")); // separación por las comas
  console.log(palindromo3.split(" ")); // separacion por espacios (palabras)
  console.log(palindromo3.split("")); // muestra caracter por caracter

  // Rellenar carecteres tanto a la derecha como izquierda

let palabra = new String("ocaso");

console.log(palabra); // 5 caracteres

console.log(palabra.padStart(10, "*")); // llenar por la izquierda hasta llegar a 10 caracteres
console.log(palabra.padEnd(15, "*")); // llenar por la derecha hasta llegar a 10 caracteres

//  RECORRIDOS DE ARREGLOS

//             0  1  2  3  4  5  6
let arreglo = [1, 2, 3, 4, 5, 6, 7];
//let arreglo2 = new Array(1, 2, 3, 4);

// for(iterador; condicion; incremento)
// recorrer desde i => 0 hasta 7(tamaño array) de uno en uno
for (let i = 0; i < arreglo.length; i++) {
  console.log(`pos[i = ${i}] : `, arreglo[i]);
}
