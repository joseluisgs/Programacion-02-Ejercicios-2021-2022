/**
 * Nombre: José Luis González
 * GitHub: joseluisgs
 * Fecha: 06/10/2021
 * Descripción: Ejercicio 04-01. Módulo que calcula si un número es primo
 */


/**
 * Funcion que devuelve si un numero es primo o no
 * @param num Numero para saber si es primo
 * @returns Verdadero si es primo
 */
function esPrimo(num: number): boolean {
  let esPrimo = true;
  let contador = 2;
  while ((esPrimo) && (contador != num)) {
    if (num % contador == 0)
      esPrimo = false;
    contador++;
  }
  return esPrimo;
}

// Exportamos las funciones que queramos que sea publicas
export default { esPrimo };
