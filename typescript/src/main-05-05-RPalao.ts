// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-05-05-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 13/10/2021
 * Descripción: Determinar, modularmente, si un año pedido por teclado es bisiesto o no.
 */

//Variables
let anio: number;

//Inicio
anio = read.questionInt(chalk.blueBright("Dime el anio que quieres averiguar si es bisiesto o no: "));
aux.esBisiesto(anio);