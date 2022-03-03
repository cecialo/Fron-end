var a = 1;
console.log(a);//aqui accedemos a la a global que vale 1

function x() {
    console.log(a);//en esta linea el valor de a es un audefined
    var a = 5;//aqui creamos una variabñle a nivel de funcion

    console.log(a);//aqui el valor de a es 5 a nivel de funcion
    console.log(window.a);//aqui el valor de a es 1 ambito global
}
x();//aquii se ejecuta el codigo de la funcion x()
console.log(a);//en esta linea el valor de a es 1