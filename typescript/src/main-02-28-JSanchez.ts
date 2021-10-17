// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";

/**
 * Autor: Jorge Sanchez Berrocoso
 * Dia: 16/10/2021
 * Función: Pedir un numero hasta que el numero se encuentre en 1 y 5.
 * 
 */

//Variables
let num : number;

//utilizo una bucle hacer mientras.
//Pedir un numero hasta que el numero se encuentre en 1 y 5.
//declarando todo los numero entre 1 y 5 fue la forma que encontre deresolver el problema.



do{
    num=read.questionInt("Introducir un numero entre 1 y 5 termina el programa");
}while(num <= 5 && num >= 1)

console.log("fin del programa");