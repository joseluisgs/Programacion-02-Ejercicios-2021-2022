// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { DEFAULT_MIN_VERSION } from 'tls';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calcula media de una cantidad indefinida de numeros.
 */


// Zona de declaraciones:

//Inicio del programa:
let dimenumero:number;
let mediat:number;
let divi=0;
let suman=0;
//Desarrollo del programa;    
do{
    dimenumero= read.questionInt("Dime el numero: ");
    if(dimenumero>=0)
    suman= suman + dimenumero
    divi = divi + 1

} while (dimenumero >=0)
mediat= suman/divi
console.log("La media de los numeros introducidos es: " +mediat)