// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos area y perimetro de una circunferencia.
 */

//Variables
let radio: number;
let area: number;
let perimetro: number;
const NUM_PI: number = 3.14;


//Iniciamos el programa
radio=read.questionInt("Dime cuanto mide el radio");
area=(NUM_PI*radio^2);
perimetro=(2*NUM_PI*radio);
console.log(" El area es de " + area + " y perimetro es de " + perimetro);
