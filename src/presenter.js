import { saludar } from './saludador.js';

const first = document.querySelector("#nombre-usuario");
const genero = document.querySelector("#genero-usuario");
const edad = document.querySelector("#edad-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value;
  const generoSeleccionado = genero.value;
  const edadUsuario = Number.parseInt(edad.value)

  div.innerHTML = "<p><b>" + saludar(nombre, generoSeleccionado, edadUsuario) + "</b></p>";
});


