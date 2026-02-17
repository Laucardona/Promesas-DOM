const usuarios = [
{ id: 1, nombre: "Laura" }, 
{ id: 2, nombre: "Carlos" },
{ id: 3, nombre: "Ana" }
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

    for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id == id) {
        encontrado = usuarios[i];
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

    estado.textContent = "Buscando";
    resultado.textContent = "";

    spinner.style.display = "block"; 

    buscarUsuario(id)

.then(function(usuario) {
resultado.textContent = "Nombre: " + usuario.nombre;
})

.catch(function(error) {
resultado.textContent = error;
})

.finally(function() {
estado.textContent = "Proceso terminado";
spinner.style.display = "none";
});

});
