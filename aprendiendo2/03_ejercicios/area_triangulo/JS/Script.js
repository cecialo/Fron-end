// Algoritmo : Área del triangulo en base a sus lados
// Entrada : Lado 1 (lado1), Lado 2 (lado2) y Lado 3 (lado3)
// Salida : Área del triangulo (area)

// Inicialización de variables
lado1 = 0.0;
lado2 = 0.0;
lado3 = 0.0;
semiperimetro = 0.0;
area = 0.0;
var2 = 0.0;

// Aqui solicito info con prompt
lado1 = prompt("Ingresa Lado 1");
lado1 = parseFloat(lado1);

lado2 = prompt("Ingresa Lado 2");
lado2 = parseFloat(lado2);

lado3 = prompt("Ingresa Lado 3");
lado3 = parseFloat(lado3);

// Calcular el semiperímetro => (l1+l2+l3)/2
semiperimetro = (lado1 + lado2 + lado3) / 2;
// carcular el area RAIZ(sem (sem-l1) (sem-l2) (sem-l3) )
area = Math.sqrt(
  semiperimetro *
    (semiperimetro - lado1) *
    (semiperimetro - lado2) *
    (semiperimetro - lado3)
);

//Mostrar el resultado
//console.log(area);
alert(area);
