/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 14/10/2021
 * Descripción : Ejercicio que dada una hora exacta introdcida muestra la hora después de incrementarle un segundo.
 */

import read from 'readline-sync';

let hora : number;
let minutos : number;
let segundos : number;

console.log('Escriba la hora.');
hora = read.questionInt();

console.log('Escriba los minutos.');
minutos = read.questionInt();

console.log('Escriba los segundos.')
segundos = read.questionInt();