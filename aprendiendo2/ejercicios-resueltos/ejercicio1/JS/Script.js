/* EJERCICIO 1*/

// FUNCIONES
function searchBigNumber(_array) {
    //Inicializar variables
    let numero_mayor = -Infinity;
    //Proceso
    for (let i = 0; i < _array.length; i++) {
      // 1022 > -infinito?
      if (_array[i] > numero_mayor) {
        numero_mayor = _array[i];
      }
    }
    //Return
    return numero_mayor;
  }
  
  // MAIN
  //           0   1    2     3    4   5 ...                           12
  let array = [
    -1, -100, -4005, -1022, -15, -23, -233, -5, -482, -545, -854, -499, -12,
  ];
  
  console.log("El numero mayor es :", searchBigNumber(array));
  