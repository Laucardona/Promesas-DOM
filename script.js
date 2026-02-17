const users = [
  {
    id: 1,
    name: "Alejandro Gómez",
    email: "alejandro.gomez@example.com"
  },
  {
    id: 2,
    name: "María Fernanda López",
    email: "maria.lopez@example.com"
  },
  {
    id: 3,
    name: "Carlos Andrés Ruiz",
    email: "carlos.ruiz@example.com"
  },
  {
    id: 4,
    name: "Laura Daniela Martínez",
    email: "laura.martinez@example.com"
  },
  {
    id: 5,
    name: "Juan Sebastián Torres",
    email: "juan.torres@example.com"
  }
];

const input = document.getElementById("userId");
const boton = document.getElementById("searchBtn");
const resultado = document.getElementById("result");
const estado = document.getElementById("status");
const spinner = document.getElementById("spinner");

function buscarUsuario(id) {

  return new Promise(function(resolve, reject) {

    setTimeout(function() {

      let encontrado = null;

      for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
          encontrado = users[i];
        }
      }

      if (encontrado) {
        resolve(encontrado);
      } else {
        reject("Usuario no encontrado");
      }

    }, 2000);

  });

}

boton.addEventListener("click", function() {

  let id = input.value;

  estado.textContent = "Buscando...";
  resultado.textContent = "";
  spinner.style.display = "block";

  buscarUsuario(id)

  .then(function(usuario) {
    resultado.textContent = 
      "Nombre: " + usuario.name + 
      " | Email: " + usuario.email;
  })

  .catch(function(error) {
    resultado.textContent = error;
  })

  .finally(function() {
    estado.textContent = "Proceso terminado";
    spinner.style.display = "none";
  });

});
