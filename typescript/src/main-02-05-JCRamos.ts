// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk, { red } from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determina si un numero es positivo o negativo.
 */



//variable
let n;

console.log("Introduce el numero que quieres comprobar.");
n=read.questionInt();

/**
 * Utilizo el consicional simple para, donde compruebo que el numero introducido
 * por teclado es positivo.
 */
if(n>=0){
    console.log("El numero introducido es positivo.");
}
else{
    console.log("El numero introducido es negativo.");
}