/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Pedira que se introduzca un número, hasta que introduzca este comprendido entre 1 y 5.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Números Comprendido Entre 1y 5
// Zona de declaración de variables y constantes
let num: number;

/**
 * Haremos un bucle que pida un número a introducir hasta que el número introducido este comprendido entre 1 y 5.
 * Cuando el usuario introduzca un numero entre 1 y 5, saldra del bucle y se finalizara el programa.
 */
do {
   num= read.questionInt("Dime une número: ")
  
   
} while (num < 1 || num > 5);
console.log(chalk.bold.blue("El número introducido esta comprendido entre 1 y 5."));