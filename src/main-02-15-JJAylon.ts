/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Ordenado de tres números de mayor a menor
 */

import read from 'readline-sync';
//Declaración de variables
let num1: number = 0;
let num2: number = 0;
let num3: number = 0;

num1 = read.questionInt("Dime el primer número: ")
num2 = read.questionInt("Dime el segundo número: ")
num3 = read.questionInt("Dime el tercer número: ")

//Funcion de ordenado
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log("Los números ordenados de mayor a menos son: " + num1 + ", " + num2 + ", " + num3)
    } else {
        console.log("Los números ordenados de mayor a menos son: " + num1 + ", " + num3 + ", " + num2)
    }
} else if (num2 > num1 && num2 >= num3) {
    if (num1 > num3) {
        console.log("Los números ordenados de mayor a menos son: " + num2 + ", " + num1 + ", " + num3)
    } else {
        console.log("Los números ordenados de mayor a menos son: " + num2 + ", " + num3 + ", " + num1)
    }
} else {
    if (num2 > num1) {
        console.log("Los números ordenados de mayor a menos son: " + num3 + ", " + num2 + ", " + num1)
    } else {
        console.log("Los números ordenados de mayor a menos son: " + num3 + ", " + num1 + ", " + num2)
    }
}