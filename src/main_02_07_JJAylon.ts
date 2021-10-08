/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Identificador de años bisiestos
 */

 import read from 'readline-sync';

let num : number = 0;

num = read.questionInt('Dime un año = ');

if(num % 400 == 0 || (num % 100 != 0 && num % 4 == 0)){
    console.log("Tu año es bisiesto");
} else {
    console.log("Tu año no es bisiesto");
}