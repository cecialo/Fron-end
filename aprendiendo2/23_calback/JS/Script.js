// CALLBACK (Llamando una funcion dentro de otra funcion)

const funcionA = function () {
    console.log("Ejecutando función A");
  };
  const funcionB = function () {
    console.log("Ejecutando función B");
  };
  
  function activandoFuncion(fx) {
    console.log("Ejecutando funcion C");
    fx(); // callback
  }
  
  // MAIN
  
  activandoFuncion(funcionA);
  activandoFuncion(funcionB);
  
  // RECETA DE UNA ENSALADA
  let vegetales = ["zanahoria", "lechuga", "tomate"];
  
  // Hacer una ensalada
  // 1. Seleccionar vegetales
  // 2. Cortar vegetales
  // 3. Mezclarlos
  // 4. Aderezar todo
  
  // Funciones
  
  const cortarVegetales = function () {
    console.log("Cortar:", vegetales);
  };
  const mezclarVegetales = function (cortar) {
    cortar();
    console.log("Mezclar:", vegetales);
  };
  const aderezarVegetales = function (mezclar, cortar) {
    mezclar(cortar);
    console.log("Aderezando", vegetales);
  };
  
  function prepararEnsalada() {
    aderezarVegetales(mezclarVegetales, cortarVegetales);
  }
  
  // Main
  
  prepararEnsalada();
  
 