// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos area y perimetro de un cuadrado.
 */

//Variables
let lado: number;
let area: number;
let perimetro: number;

//Iniciamos el programa
lado= read.questionInt("Dinos el lado:");
    area= (lado*2);
console.log("El area es de:" + area);
    perimetro=(lado*4);
console.log("El perimetro es de:" + perimetro);