// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Pedir un numero hasta que el numero se encuentre en 1 y 5.
 * 
 */

//Variables
let num;

//ejercicio 2-28, voy a utilizar una bucle hacer mientras.
//Pedir un numero hasta que el numero se encuentre en 1 y 5.
//declarando todo los numero entre 1 y 5 fue la forma que encontre deresolver el problema.



do{
    num=read.questionInt("Si introduces un numero entre 1 y 5 termina el programa : ");
}while(num < 1 || num > 5)

console.log("fin del programa.");

