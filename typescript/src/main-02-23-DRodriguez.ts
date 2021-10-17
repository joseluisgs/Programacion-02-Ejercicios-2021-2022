// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos el factorial de un numero.
 */


//Variables
let factorial=1;
let number: number;

//Iniciamos el programa
number= read.questionInt("Dime el numero")
for(let i = 1; i<=number; i++)
    factorial=factorial*i;
console.log("El resultado del factorial es:" + factorial);