/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que calula la raíz cuadrada de un número positivo.
 */

import read from "readline-sync";
import raiz from "./mod-05-04-MSPinzon";

//Variables.
let numero : number;

//Pido al usuario el número.
console.log ('Escriba un número positivo del que desea obtener la raíz cuadrada');
numero = read.questionInt();

//Mientras que el usuario siga escribiendo un número negativo, se mostrará por pantalla que el caracter introducido es incorrecto.
while (numero < 0){
    console.log('Introduzca correctamente el caracter');
    numero = read.questionInt();
}

//Muestro por pantalla el resultado
console.log('La raíz cuadrada de ' + numero + ' es ' + raiz.raizCuadrada(numero));
