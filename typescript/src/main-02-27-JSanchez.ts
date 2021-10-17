// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";

/**
 * Autor: Jorge Sanchez Berrocoso
 * Dia: 16/10/2021
 */

//Variables
let num:number;

//voy a utilizar una bucle hacer mientras.

do{
    num=read.questionInt("Introduce un numero, si es mayor a 100 termina el programa: ");
}while(num<=100)

console.log("fin del programa.");