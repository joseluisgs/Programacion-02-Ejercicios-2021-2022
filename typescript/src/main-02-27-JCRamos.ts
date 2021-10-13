// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Algoritmo que pide numero hasta que introduzcamos 
 * un numero fuera del rango establecido.
 * 
 */

//Variables
let num;

//voy a utilizar una bucle hacer mientras.

do{
    num=read.questionInt("Introduce un numero, si es mayor a 100 termina el programa: ");
}while(num<=100)

console.log("fin del programa.");


