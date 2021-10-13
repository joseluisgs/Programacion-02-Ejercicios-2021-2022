/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Saber si un año dado por teclado, es bisiesto o no.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Año Bisiesto
// Zona de declaración de variables y constantes
let ano: number;

/**
 * Pediremos al usuario que introduzca un año para comprobar si ese año es bisiesto o no.
 * Se utiliza un dowhile como filtro, si el número introducido es menor de 0 no queremos ese dato, por lo tanto volvera a pedir un año.
 */
//Entrada
do {
   ano = read.questionInt("Introduzca el año ");
   console.log(chalk.bold.blue(ano));

} while (ano < 0);

/**
 * Para comprobar si un año es bisiesto o no, dviremos el año entre 400 y si el resto es 0 es bisiesto, si no
 * se puede dividir entre 400, la siguiente condición es que si se divide entre 100 el resto no sea 0 y si se divide entre 4 el resto sea 0.
 */
//Salida
if (ano % 400 == 0 || ano % 100 != 0 && ano % 4 ==0) {
   console.log("El año es bisiesto");

}else{
   console.log(chalk.bold.red("No es bisiesto"));
}