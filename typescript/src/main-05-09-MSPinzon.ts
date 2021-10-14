/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 07/10/2021
 * Descripción : Ejercicio que calula el número de cifras de un número.
 */

import read from "readline-sync";
import cifras from "./mod-05-09-MSPinzon";

let numero: number;

console.log("Escriba un número del cual desea saber el número de cifras.");
numero = read.questionFloat();

console.log("El número de cifras de " + numero + " es " + cifras.numeroCifras(numero) + '.');



