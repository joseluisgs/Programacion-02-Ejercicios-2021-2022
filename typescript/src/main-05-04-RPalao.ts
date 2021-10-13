// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-05-04-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 13/10/2021
 * Descripción: Calcula la raíz cuadrada de un número que pedimos por teclado, teniendo la precaución
 * de que el número no sea negativo; en este caso se debe informar de que la operación no es
 * posible. Se debe realizar modularmente.
 */

//Variables
let num:number;

//Inicio
num = read.questionInt(chalk.blueBright("Dime el numero del que quieres la raiz cuadrada: "));
aux.esRaiz(num);