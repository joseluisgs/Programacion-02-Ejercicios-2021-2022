/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 14/10/2021
 * Descripción : Ejercicio que dados dos números enteros, calcula el cociente y el resto mediante restas sucesivas. 
 */

import read from 'readline-sync';
import resta from './mod-05-15-MSPinzon';

let dividendo : number;
let divisor : number;

console.log('Escriba el dividendo de la división que quiere realizar.');
dividendo = read.questionInt();

console.log('Escriba el divisor de la división que quiere realizar.');
divisor = read.questionInt();

console.log('El resto de la división es ' + resta.divisionRestasSucesivas(dividendo, divisor));