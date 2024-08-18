export function saludar(nombre, genero) {
    if (genero === "masculino") {
      return "Hola, bienvenido "+ nombre + "!!!";
    } else if (genero === "femenino") {
      return "Hola, bienvenida "+ nombre + "!!!";
    } else {
      return "Hola, bienvenid@ "+ nombre + "!!!";
    }
  }
  