const button = document.querySelector("#add");
console.log(button);
const button1 = document.querySelector("#del");
console.log(button1);

function addrow() {
  let data = document.querySelector("#data").insertRow(0);
  let col1 = data.insertCell(0);
  col1.textContent = "New Cell 1";
  let col2 = data.insertCell(1);
  col2.textContent = "New Cell 2";
}
function delrow() {
  let data = document.querySelector("#data").deleteRow(0);
}

button.addEventListener("click", addrow);
button1.addEventListener("click", delrow);