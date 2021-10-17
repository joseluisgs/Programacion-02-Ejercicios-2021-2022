// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Creamos un programa en el que nos indica si los numeros introducidos estan ordenados o no.
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
if(num1<=num2 && num2<=num3)
    console.log("Los numeros estan ordenados")
    else { 
        console.log("Los numeros no estan ordenados")
    }