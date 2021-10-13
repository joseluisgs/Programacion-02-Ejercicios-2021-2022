/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Pedira que se introduzca un número, hasta que el número sea mayor de 100.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Números Hasta 100
// Zona de declaración de variables y constantes
let num: number;

/**
 * Haremos un bucle que pida un número a introducir hasta que el número sea mayor de 100.
 * Cuando el usuario introduzca un numero mayor de 100, saldra del bucle y se finalizara el programa.
 */
do {
   num= read.questionInt("Dime une número: ")
  
   
} while (num <= 100);

console.log(chalk.bold.blue("El número introducido es mayor de 100"));