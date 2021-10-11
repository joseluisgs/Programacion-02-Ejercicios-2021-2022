/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Cálculo de las cifras de un número
 */

import read from 'readline-sync';

//Declaración de variables
let num: number = 0;
let count: number =0;


do{
    num = read.questionInt("Dime un número de como mucho cinco cifras: ")
} while (Math.abs(num) >= 100000)

//Función división de numero en cifras
while (Math.abs(num)>1){
    num = num/10;
    count++;
}
console.log("Tu numero tiene "+count+" cifras")