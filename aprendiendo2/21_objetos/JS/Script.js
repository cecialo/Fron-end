const months = ["Octubre","Marzo","Julio","Febrero","Enero"];

months.sort();
months.reverse();

console.log(months);

// creando un a funcion 


const array = [1,8,2,32,9,7,4];

const fc = function(a,b){
    if(a > b) return 1; // el primer elemento es mayor
    if(a < b) return -1; // el primer elemento es menor
    return 0; // a y b son iguales
};

const fc2 = function(a,b){
    return (a - b)
};

array.sort(fc);

console.log(array);


/* OBJETOS */

const objeto = new Object(); // Manera tradicional

const objeto2 = { }; // Manera resumida (Literal)

const player = {
    name: "Manz",
    lives: 99,
    strength: 10, 
}




let coche = {
    //Atributos
    color: "Blanco",
    marca:"Toyota",
    modelo:"Corola",
    kilometros: 0,
    año: 2021,
    cantidad_puertas: 4,
    nuevo: true,
    gasolina: true,
    automatico: false,
    //Metodos
    arrancar() {
        return "Estoy arrancando.."
    }
}

acelerar() {
    return "Estoy Acelerando..."
},
frenar: () => {
    return "Estoy Frenando..."
}


}
console.log(coche["año"])
console.log(coche.a


// MUNDIALITO 



let estadio = {
    //Atributos
    name:"Lusail",
    country:"Catar",
    competition: "Copa del mundo",
    aforo: 80000,
    // Métodos
    match(equipo_A, equipo_B){
        let goles_A = 0;
        let goles_B = 0;
        let resultado = "";
        // Inicia el partido
        goles_A = Math.round(Math.random() * 5); // 0-5;
        goles_B = Math.round(Math.random() * 5); // 0-5;
        // Final el partido
        equipo_A.goles += goles_A; // equipo_A.goles = equipo_A.goles + goles_A;
        equipo_B.goles += goles_B; 

        // Calculo de puntos

        if(goles_A > goles_B){
          //Equipo A Ganó
          equipo_A.puntos += 3;
        }
        if(goles_A < goles_B){
          //Equipo B Ganó
          equipo_B.puntos += 3;
          
        }
        if(goles_A == goles_B){
           //Ambos equipos han empatado
          equipo_A.puntos += 1;
          equipo_B.puntos += 1;
        }

        // Muestra el resultado
        resultado = ` ${equipo_A.name} VS ${equipo_B.name} Score : ${goles_A} - ${goles_B}`
        
        return resultado;
    }
}

let team_psg = {
  name: "PSG",
  country: "France",
  color: "azul y blanco",
  goles:0,
  puntos:0,
};

let team_america = {
  name: "America",
  country: "Mexico",
  color: "Crema y Rojo",
  goles:0,
  puntos:0,
};

let team_cristal = {
  name: "Cristal",
  country: "Peru",
  color: "Celeste",
  goles:0,
  puntos:0,
};

let team_comunicaciones = {
  name: "Comunicaciones",
  country: "Guatemala",
  color: "Blanco y Azul",
  goles:0,
  puntos:0,
};

// MAIN  

// const resultado = estadio.match(team_america,team_psg);

console.log(estadio.match(team_america,team_psg))
console.log(estadio.match(team_cristal,team_psg))
console.log(estadio.match(team_america,team_comunicaciones))
console.log(estadio.match(team_psg,team_comunicaciones))

console.log(team_psg);
console.log(team_america);
console.log(team_cristal);
console.log(team_comunicaciones);
