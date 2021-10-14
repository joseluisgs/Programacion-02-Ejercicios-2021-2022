/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que calula el perímetro y la superficie de un cuadrado.
 */

import read from "readline-sync"
import superficie from "./mod-05-01-MSPinzon" ;
import perimetro from "./mod-05-01-MSPinzon" ;

//Variables.
let ladoCuadrado: number;

//Pido el lado al usuario.
console.log('Escriba el lado del cuadrado del que desea calcular el perímetro y la superficie.');
ladoCuadrado = read.questionInt();

console.log('La superficie del cuadrado es ' + superficie.calcularSuperficie(ladoCuadrado));
console.log('El perimetro del cuadrado es ' + perimetro.calcularPerimetro(ladoCuadrado));

