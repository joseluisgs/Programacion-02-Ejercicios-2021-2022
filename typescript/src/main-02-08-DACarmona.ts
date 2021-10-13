/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Saber si un número dado por el teclado es decimal o entero.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


// Programa Numero Entero o Decimal.
// Zona de declaración de variables y constantes
let num: number;

/**
 * Pediremos al usario que introduzca un número y se asignara en la variable num.
 * Utilizamos el Float para que el dato que se introduzca se un número y pueda contener decimales.
 */
//Entrada
num = read.questionFloat("Introduce el número: ");
console.log(chalk.bold.blue(num));

/**
 * Para comprobar si el número es decimal o entero, utilizaremos una condición.
 * Un número entero si es divdido entre 1, su resto es 0, sino es decimal.
 */
//Salida
if (num % 1 == 0) {
   console.log("El número es entero");

} else {
   console.log("El número es decimal");
   
}