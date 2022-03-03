// CREANDO UN NODO <div> (Contenedor)
const div = document.createElement("div");
div.id = "div_insertado";
div.textContent = "Texto insertado desde JS";
// CREANDO UN NODO <h1>
const h1 = document.createElement("h1");
h1.id = "title";
h1.textContent = "Titulo H1";
// Inserta el h1 (hijo) dentro del div (contenedor)

const container = document.querySelector("#container"); // busqueda
container.appendChild(div);
// Inserta un elemento en una posición
// (antes del elemento -> beforebegin)
// (antes del texto -> afterbegin)
// (despues del texto -> beforeend)
// (despues del elemento -> beforeend)
div.insertAdjacentElement("beforebegin", h1);

console.log(div);
