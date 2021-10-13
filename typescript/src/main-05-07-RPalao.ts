// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-05-07-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 13/10/2021
 * Descripción: Realiza un conversor de grados Centígrados a grados Farenheit.
 * Nuestro algoritmo debe poder hacer la conversión en ambos sentidos.
 * Modularmente.
 */

//Variables
let decision: string;

//Inicio
console.log('Pasar de Centigrados a Farenheit 1 / Pasar de Farenheit a Centigrados 2');
console.log('Que quieres hacer(Escribe 1 o 2)');
decision = read.question();

//Return funcion
console.log('El resultado de la conversion es ' + aux.esConversor(decision));