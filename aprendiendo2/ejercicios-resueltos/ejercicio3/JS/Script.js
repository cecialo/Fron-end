  // EJERCCIO 3
  
  
  // Funciones
  
  // Funciones
  
  // Funciones
  
  function isPalindromo(_frase) {
    let frase_sin_espacios = _frase.replaceAll(" ", "");
  
    let array_chars = frase_sin_espacios.split("");
    //array_chars = [...frase_sin_espacios];
    //array_chars = Array.from(frase_sin_espacios);
  
    let reverse_array = array_chars.reverse();
  
    let frase_invertida = reverse_array.join(""); // Juntar los caracteres en un String
  
    //   if ( frase_sin_espacios == frase_invertida ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    return frase_sin_espacios == frase_invertida; // TRUE or FALSE
  }
  // Main
  
  // arreglo de carecteres
  let frase = "anita lava la tina";
  
  // return TRUE or FALSE si es palindromo
  let resultado = isPalindromo(frase);
  
  console.log(
    `La frase ${frase}`,
    resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
    "un Palindromo"
  );
  
  
  
  
  
  // EJERCCIO 3
  
  
  // Funciones
  
  // Funciones
  
  // Funciones
  
  function isPalindromo(_frase) {
    let frase_sin_espacios = _frase.replaceAll(" ", "");
  
    let array_chars = frase_sin_espacios.split("");
    //array_chars = [...frase_sin_espacios];
    //array_chars = Array.from(frase_sin_espacios);
  
    let reverse_array = array_chars.reverse();
  
    let frase_invertida = reverse_array.join(""); // Juntar los caracteres en un String
  
    //   if ( frase_sin_espacios == frase_invertida ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    return frase_sin_espacios == frase_invertida; // TRUE or FALSE
  }
  // Main
  
  // arreglo de carecteres
  let frase = "anita lava la tina";
  
  // return TRUE or FALSE si es palindromo
  let resultado = isPalindromo(frase);
  
  console.log(
    `La frase ${frase}`,
    resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
    "un Palindromo"
  );
  
  
  
  
  
  // EJERCCIO 3
  
  
  // Funciones
  
  // Funciones
  
  // Funciones
  
  function isPalindromo(_frase) {
    let frase_sin_espacios = _frase.replaceAll(" ", "");
  
    let array_chars = frase_sin_espacios.split("");
    //array_chars = [...frase_sin_espacios];
    //array_chars = Array.from(frase_sin_espacios);
  
    let reverse_array = array_chars.reverse();
  
    let frase_invertida = reverse_array.join(""); // Juntar los caracteres en un String
  
    //   if ( frase_sin_espacios == frase_invertida ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    return frase_sin_espacios == frase_invertida; // TRUE or FALSE
  }
  // Main
  
  // arreglo de carecteres
  let frase = "anita lava la tina";
  
  // return TRUE or FALSE si es palindromo
  let resultado = isPalindromo(frase);
  
  console.log(
    `La frase ${frase}`,
    resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
    "un Palindromo"
  );
  
  
  
    