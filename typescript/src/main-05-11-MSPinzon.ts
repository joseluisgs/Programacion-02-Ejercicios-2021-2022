/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 13/10/2021
 * Descripción : Ejercicio que calula el factorial de un número.
 */
import read from "readline-sync";
import factorial from './mod-05-11-MSPinzon'

let numero : number;

console.log('Introduzca un número del que desea calcular su factorial.');
numero = read.questionInt();

console.log ('El factorial de ' + numero + ' es ' + factorial.calcularFactorial(numero));