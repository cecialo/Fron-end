//Declaracion de la función "saludar"
function saludar () {
    //contenido de la funcion
    console.log("Hola,soy una función");
}

//llamada
saludar ();

//tabla de multiplicar del 1
function escribirTablaMultiplicar(tabla){

	document.write("<h2>Tabla de multiplicar del "+ tabla +"</h2>");

	document.write("<ul>");
	//i++ significa i=i+1;

	for(i = 0;i<=10;i++){
		document.write("<li>");
		document.write(tabla + "x " + i + "= " + tabla * i);
		document.write("</li>");
    }

	document.write("</ul>");
}


var numTablas = parseInt(window.prompt("¿Cuantas tabla quieres?"));

for(k=0;k<=numTablas;k=k+1){
	document.write("<div>");
	escribirTablaMultiplicar(k);	
	document.write("</div>");
}