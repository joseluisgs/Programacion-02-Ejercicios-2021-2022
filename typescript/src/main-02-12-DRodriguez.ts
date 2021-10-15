// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que nos indica que si los numeros introducidos son consecutivos uno de otro.
 */

//PROGRAMA NUMEROS ORDENADOS
//Variables
let num1: number;
let num2: number;
let num3: number;


//Iniciamos el programa
num1=read.questionInt("Indica el primer numero");
num2=read.questionInt("Indica el segundo numero");
num3=read.questionInt("Indica el tercer numero");

//Proceso del programa
if(num1 +1 == num2 && num2 +1 ==num3)
    console.log("Los numeros son consecutivos")
    else { 
        console.log("Los numeros no son consecutivos")
    }