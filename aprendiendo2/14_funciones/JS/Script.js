// CAJA DE HERRAMIENTAS => FUNCIONES()
function verEstadoMadera(estado){
    console.log("El estado de la madera", estado )
    }
    function martillo(){
    console.log("Estoy martillando")
    }
    function atornillador(){
    console.log("Estoy atornillando")
    }
    function sierra(madera){
    console.log("Estoy serruchando un ", madera)
    madera = "Piezas de madera";
    return madera;
    }
    function taladro(madera,broca){
    console.log("Estoy taladrando")
    }
    // =================================
    // PROGRAMA PRINCIPAL
    let madera = "Roble"
    // Voy a construir una mesa
    // Cortar la madera
    madera = sierra(madera);
    
    // Hacer huecos
    taladro();
    // Unir las piezas
    atornillador();
    // probar resistencia de la mesa
    martillo();