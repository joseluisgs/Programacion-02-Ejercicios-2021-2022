// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { truncate } from 'fs';
/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos la media de tres numeros.
 */


// Zona de declaración de variables y constantes
let num1: number;
let num2: number;
let num3: number;
let media: number;

//Inicio del programa

num1= read.questionInt("Dime el primer numero");
num2= read.questionInt("Dime el segundo numero");
num3= read.questionInt("Dime el tercer numero");

media= ((num1+num2+num3)/3);
console.log("La nota media con decimales es: " + media)
console.log("La media es: " + Math.trunc(media))