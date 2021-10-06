/**
 * Nombre: José Luis González
 * GitHub: joseluisgs
 * Fecha: 10/10/2019
 * Descripción: Ejercicio de los primeros numeros primos
 */

import read from 'readline-sync';
import chalk from 'chalk';
import primo from './mod-04-01'

// Suma de los n primeros números primos

let limite: number = 0;
let suma: number = 0;

do {
  limite = read.questionInt(chalk.yellow('Dime un número: '));
} while (limite <= 0);

// Repetimos hasta el limite
for (let num = 2; num <= limite; num++) {

  // Si es primo, sumamos, llamamos a la función que calcula si un número es primo
  if (primo.esPrimo(num))
    suma += num;

}

console.log(chalk.green("El resultado de la suma de los números primos entre 1 y " + limite + " es: " + suma));
