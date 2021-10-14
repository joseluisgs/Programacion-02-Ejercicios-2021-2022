/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que calula averigua si un año es bisiesto.
 */

import read from 'readline-sync';
import bisiesto from "./mod-05-05-MSPinzon"

//Variables
let año: number;
let esBisiesto = false;

//Se le pide el año al usuario.
año = read.questionInt('Ingrese un año: ');

if(bisiesto.añoBisiesto(año, esBisiesto) == true){
    console.log("El año introducido es bisiesto.");
}else{
    console.log("El año introducido no es bisiesto.");
}



