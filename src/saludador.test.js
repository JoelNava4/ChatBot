import { saludar } from './saludador';

test('saludar debe devolver un saludo con el nombre proporcionado', () => {
  const resultado = saludar('Juan',"masculino",10);
  expect(resultado).toBe('Hola, bienvenido príncipe Juan!!!');
});