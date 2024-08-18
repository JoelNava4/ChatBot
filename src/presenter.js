import {saludar} from "./saludador";

const first = document.querySelector("#nombre-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value;

  div.innerHTML = "<p><b>" + saludar(nombre) + "</b></p>";
});

