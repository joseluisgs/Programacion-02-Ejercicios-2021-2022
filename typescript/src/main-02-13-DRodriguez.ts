// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que realiza la divison de un numero entre otro numero con el resto de la division.
 */


//Variables
let resto: number;
let resultado = 0;
let numeroA: number;
let numeroB: number;


//Iniciamos el programa
numeroA= read.questionInt("Dime el numero que quieres dividir");
numeroB = read.questionInt("Dime entre cuanto lo quieres dividir");
resto= numeroA

while (resto>= numeroB){
    resto = (resto - numeroB)
    resultado = (resultado + 1)
} 
    console.log("El resultado es:" + resultado);
    console.log("El resto es:" + resto);