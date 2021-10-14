/**
 * Nombre: Alejandro Sánchez Monzón
 * GitHub: AlejandroSanchezMonzon
 * Fecha: 14/10/2021
 * Descripción: En el siguiente código estamos creando un programa que, tras introducir una hora por teclado siguiente el formato indicado, a esta, se le suma un segundo. 
 *              Una vez sumado el segundo el programa imprime de nuevo la hora actualizada con la suma de ese segundo. 
 */

//Declaración de las librerías a utilizar.
import read from "readline-sync";
import chalk from "chalk";

//Declaración de las diferentes variables que emplearemos.
let segundos: number;
let minutos: number;
let horas: number;

//Comenzamos pidiendole al usuario que introduzca los datos necesarios para ejecutar el programa.
console.log("Introduzca los segundos dentro del formato h:m:s -->")
segundos = read.questionInt();

console.log("Introduzca los minutos dentro del formato h:m:s -->");
minutos = read.questionInt();

console.log("Introduzca la hora dentro del formato h:m:s -->")
horas = read.questionInt();

//Comenzamos las condiciones en base a la descripción dada anteriormente.
if (((horas >= 0) && (horas <= 24)) && ((minutos >= 0) && (minutos <= 60)) && ((segundos >= 0) && (segundos <= 60))) {
    segundos = segundos +1;
        if (segundos == 60) {
            segundos = 0;
            minutos = minutos +1;
        }

        if (minutos == 60) {
            minutos = 0;
            horas = horas +1;
        }

        if (horas == 60) {
            horas = 0;
        } 
    //Si se cumple la condición, el programa imprimirá por pantalla la siguiente introducción.
    console.log("La nueva hora tras sumar un segundo a la anterior es --> " + chalk.green(horas) + ":" + chalk.green(minutos) + ":" + chalk.green(segundos));

} else { 
    //En caso contrario, la condición eligirá el camino contrario.
    console.log("La hora introducida es incorrecta.");
}