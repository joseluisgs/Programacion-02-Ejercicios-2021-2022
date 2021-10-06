/**
 * Nombre: José Luis González
 * GitHub: joseluisgs
 * Fecha: 06/10/2021
 * Descripción: Ejercicio de los primeros numeros primos
 */

import read from 'readline-sync';
import chalk from 'chalk';
import primo from './mod/mod-04-01-JLGonzalez'

// Suma de los n primeros números primos
main();

/**
 * Función principal
 */
function main() {

  let limite: number = 0;
  let suma: number = 0;

  primo.presentacion();

  do {
    limite = read.questionInt(chalk.yellow('Dime un número: '));
  } while (limite <= 0);

  // Repetimos hasta el limite
  for (let num = 2; num <= limite; num++) {

    // Si es primo, sumamos, llamamos a la función que calcula si un número es primo
    // La llamo de manera local o usando un módulo externo 
    // Para que veáis la diferencia
    if (esPrimo(num) && primo.esPrimo(num))
      suma += num;

  }

  console.log(chalk.green("El resultado de la suma de los números primos entre 1 y " + limite + " es: " + suma));
}

/**
 * Funcion LOCAL que devuelve si un numero es primo o no
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


