// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-05-02-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 13/10/2021
 * Descripción: Ejercicio programa modular que calcule el area y la circunferencia de un circulo
 * cuyo radio pediremos por teclado.
 */

//Variables
let radio: number;

//Inicio
radio = read.questionInt(chalk.blueBright("Dime el radio del circulo: "));

console.log(chalk.greenBright("El area de un circulo es:" + aux.esArea(radio)));
console.log(chalk.greenBright("El area de un circulo es:" + aux.esCircunferencia(radio)));