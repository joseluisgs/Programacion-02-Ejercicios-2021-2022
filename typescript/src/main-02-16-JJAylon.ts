/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Ejercicio transformcion de horas segundos y minutos
 */

import read from 'readline-sync';

//Declaración de variables
let hour: number = 0;
let min: number = 0;
let sec: number = 0;
let increase: number = 0;

//Lectura de variables
do {
    hour = read.questionInt("Dime la hora: ")
} while (hour > 23 || hour < 0)
do {
    min = read.questionInt("Dime los minutos: ")
} while (min > 59 || hour < 0)
do {
    sec = read.questionInt("Dime los segundos: ")
} while (sec > 59 || hour < 0)
increase = read.questionInt("Dime cuantos segundos quieres aumentar: ")

//Funcion calculo
do {
    sec = sec + increase;

    min = min + Math.trunc(sec / 60);

    sec = sec % 60;

    hour = hour + Math.trunc(min / 60);

    min = min % 60;
} while (min > 60 || sec > 60)

console.log("horas: " + hour + ", minutos: " + min + ", segundos: " + sec)