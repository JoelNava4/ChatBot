export function saludar(nombre, genero, edad, idiomaSaludo) {
  if (idiomaSaludo === "español"){
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
  } else if (idiomaSaludo === "ingles"){
    if (edad >= 0 && edad < 12) {
      return genero === "masculino" ? "Hello, welcome young prince " + nombre + "!!!" :
             genero === "femenino" ? "Hello, welcome young princess " + nombre + "!!!" :
             "Hello, welcome young explorer " + nombre + "!!!";
    } else if (edad >= 12 && edad < 18) {
      return genero === "masculino" ? "Hello, dear young man " + nombre + "!!!" :
             genero === "femenino" ? "Hello, dear young lady " + nombre + "!!!" :
             "Hello, dear young one " + nombre + "!!!";
    } else if (edad >= 18 && edad < 60) {
      return genero === "masculino" ? "Hello, welcome esteemed gentleman " + nombre + "!!!" :
             genero === "femenino" ? "Hello, welcome esteemed lady " + nombre + "!!!" :
             "Hello, welcome esteemed guest " + nombre + "!!!";
    } else if (edad >= 60) {
      return genero === "masculino" ? "Hello, welcome respected sir " + nombre + "!!!" :
             genero === "femenino" ? "Hello, welcome respected madam " + nombre + "!!!" :
             "Hello, welcome respected guest " + nombre + "!!!";
    } else {
      return "Oh no!!!, your age is not valid.";
    }    
  }
}
  