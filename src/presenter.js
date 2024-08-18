import { saludar } from './saludador.js';

const first = document.querySelector("#nombre-usuario");
const genero = document.querySelector("#genero-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value;
  const generoSeleccionado = genero.value;

  div.innerHTML = "<p><b>" + saludar(nombre, generoSeleccionado) + "</b></p>";
});


