$(document).ready(function(){
    // una vez cargado el archivo, tiramos el primer dado
    tiroDado();
});

function tiroDado()
{
             
    // obtenemos un numero aleatorio entre el 0 y el 5
    var num = Math.floor(Math.random() * 6) + 0;
    // escondemos todas las imagenes
    $("#tablero img").hide(tiroDado);
    // mostramos la imagen aleatoria
    $("#tablero img").eq(num).fadeIn(tiroDado);
    // mostramos el numero en texto
    $("#ultimoNumero").html(num+1);
}