// EJEMPLO DE LATENCIA RECUPERAR INFORMACION

function traerUsers(callback) {
    console.log("loading...");
    setTimeout(() => {
      //traer una lista de usuarios
      let response = ["Julissa", "Nicolle", "Gilberto"];
      callback(response);
    }, 3000); // 3 seconds
  }
  function MostrarUsers(users) {
    console.log(users);
  }
  
  // MAIN
  traerUsers(MostrarUsers);
  