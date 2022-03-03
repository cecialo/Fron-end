    function buscaPalabraMasLarga(s) {
        palabra_grande = ""
        palabras = s.replace(",", " ").split(" ");
        palabras.forEach(function(palabra){
        if (palabra.length > palabra_grande.length){
             palabra_grande = palabra
         };
        });
        return palabra_grande 
      };
      
      alert( buscaPalabraMasLarga("Tratemos con una palabra grande a ver su longitud: otorrinolaringología"));
      