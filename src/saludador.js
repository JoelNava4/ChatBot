export function saludar(nombre, genero, edad) {
  if (edad >= 0 && edad < 12) {
    return genero === "masculino" ? "Hola, bienvenido príncipe " + nombre + "!!!" :
           genero === "femenino" ? "Hola, bienvenida princesa " + nombre + "!!!" :
           "Hola, bienvenid@ joven explorador(a) " + nombre + "!!!";
  } else if (edad >= 12 && edad < 18) {
    return genero === "masculino" ? "Hola, estimado joven " + nombre + "!!!" :
           genero === "femenino" ? "Hola, estimada joven " + nombre + "!!!" :
           "Hola, estimad@ joven " + nombre + "!!!";
  } else if (edad >= 18 && edad < 60) {
    return genero === "masculino" ? "Hola, sé bienvenido estimado caballero " + nombre + "!!!" :
           genero === "femenino" ? "Hola, sé bienvenida estimada dama " + nombre + "!!!" :
           "Hola, sé bienvenid@ estimad@ " + nombre + "!!!";
  } else if (edad >= 60) {
    return genero === "masculino" ? "Hola, sé bienvenido estimado señor " + nombre + "!!!" :
           genero === "femenino" ? "Hola, sé bienvenida estimada señora " + nombre + "!!!" :
           "Hola, sé bienvenid@ estimad@ " + nombre + "!!!";
  } else {
    return "Ohh noo!!!, su edad no es valida";
  }
}
  