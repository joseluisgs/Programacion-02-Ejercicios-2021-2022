// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-05-03-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 13/10/2021
 * Descripción: Determinar si un número leído por teclado es positivo o negativo mediante un programa
 * modular.
 */

//Variables
let num: number;

//Inicio
num = read.questionInt(chalk.greenBright("Dime el numero que quieras saber si es positivo o negativo: "));
aux.esPositivo(num);