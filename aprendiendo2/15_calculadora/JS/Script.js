//CONSTANTES

//FUNCIONES
//suma
function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}
//resta
function resta(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}
//multiplicación
function multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
//division
function division(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}
//modulo
function modulo(num1, num2) {
    let resultado = num1 % num2;
    return resultado;
}
//raiz cuadrada
function raiz(num1) {
    let resultado = Math.sqrt(num1);
    return resultado;
}
//area del trapecio
function areatrapecio(num1, num2, haltura) {
    let resultado = num1 + num2 * haltura / 2;
    return resultado;
}
//area del cilindro
function areacilindro(radio, altura) {
    let resultado = 2 * 3.14 * radio * radio +altura;
    return resultado;
}
//area del triangulo con los lados
function areatriangulo(num1, num2, num3) {
    let resultado = num1 + num2 + num3 / 2;
    return resultado;
}
//area del circulo
function areatriangulo(radio) {
    let resultado = 3.14 * radio * radio;
    return resultado;

//MAIN
console.log("Mi calculadora intregada correctamente");