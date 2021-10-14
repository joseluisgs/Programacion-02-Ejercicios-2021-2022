/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que calula el signo del numero indicado.
 */
import read from "readline-sync";
import signo from "./mod-05-03-MSPinzon";

//Variables.
let numero : number;

//Pido al usuario un número para saber su signo.
console.log("Introduzca un número.");
numero = read.questionInt();

if (signo.esNumeroPositivo(numero) == true){
    console.log("El número introducido es positivo.")
}else{
    console.log("El número introducido es negativo.")
}


