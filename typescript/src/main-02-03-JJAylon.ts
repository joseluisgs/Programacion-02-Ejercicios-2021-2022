/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Cálculo del perimetro y el area de una circunferencia 
 */

import read from 'readline-sync';

const PI = Math.PI;
let radio : number = 0;

radio = Number(read.question("Introduzca radio: "));

console.log("Constante pi = " + PI);
console.log("Perimetro = " + (2 * PI * radio));
console.log("Área = "+ (PI * radio^2));