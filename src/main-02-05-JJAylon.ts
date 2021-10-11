/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Identificador de signo de un número
 */

import read from 'readline-sync';

let num : number = 0;

num = read.questionInt('Dime un numero = ');

if(num < 0){
    console.log("Tu numero es negativo")
} else {
    console.log("Tu numero es positivo")
}