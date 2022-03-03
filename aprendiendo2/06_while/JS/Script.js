let contador = 1;
let num = 0;

// AND => &&
// OR => ||  => ALT + 1

//   VERDADERO AND FALSO
while ((num != 7 && contador < 5) || num == 11) {
  let dato = prompt("Introduce  número del 1 al 10:", "");
  num = parseInt(dato);

  document.write(`El número introducido es ${num} </br>`);
  // ` -> "Alt + 96" or  "alt gr + }" or "tecla a lado de 'P'"
  // document.write("El número introducido es "+num+"</br>");

  document.write(` El contador es ${contador} </br> `);

  contador++; //contador = contador + 1;
}
document.write(`</br><h2>
    Fin del Programa </br>
    contador ya NO es menor que 5.   
    </h2>`);

document.write(`</br> Último número introducido es ${num}`);

let contador = 1;
let dia = "Lunes";

while (
  dia == "Lunes" ||
  dia == "Martes" ||
  dia == "Miercoles" ||
  dia == "Jueves" ||
  (dia == "Viernes" && contador < 4)
) {
  dia = prompt("¿Que día es hoy?");

  document.write(` Hoy es ${dia}, si trabajas</br>`);

  contador++;
}

document.write(`Ingresaste un dia no valido`);
