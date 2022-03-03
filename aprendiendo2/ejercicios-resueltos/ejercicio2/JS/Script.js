// EJERCICIO 2

 // Funciones

 function getLargestWord(_texto) {
    let words = _texto.split(" "); // arreglo de palabras
    let max_length = 0; // tamaño maximo
    let max_word = ""; // palabra larga
  
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      if (max_length < palabra.length) {
        max_word = palabra;
        max_length = palabra.length;
      }
    }
    return max_word;
  }
  
  function getShortestWord(_texto) {
    let words = _texto.split(" "); // arreglo de palabras
    let min_length = Infinity; // tamaño minimo
    let min_word = ""; // palabra corta
  
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      // Infinity > 8 , 8 > 3 , 3 > 3 , 3 > 7
      if (min_length > palabra.length) {
        min_word = palabra;
        min_length = palabra.length;
      }
    }
    return min_word;
  }
  
  // Main
  
  let texto =
    "Tratemos con una palabra grande para ver su longitud otorrinolaringología";
  // obtener la palabra mas grande de un texto
  let largest_word = getLargestWord(texto);
  console.log(largest_word);
  // mostrar el tamaño de esa palabra
  console.log(largest_word.length);
  
  let shortest_word = getShortestWord(texto);
  console.log(shortest_word);
  // mostrar el tamaño de esa palabra
  console.log(shortest_word.length);
  