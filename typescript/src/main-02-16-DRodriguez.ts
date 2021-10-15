// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa reloj que nos indica la hora si aumentamos segundos y minutos.
 */


// Zona de declaraciones
let hora: number;
let minutos: number;
let segundos: number;


//Inicio del programa:
hora= read.questionInt("Dime la hora");
minutos= read.questionInt("Dime los minutos");
segundos= read.questionInt("Dime los segundos");

//Desarrollo del programa;
segundos++;
if(segundos >= 59) {
    minutos++;
    segundos=(segundos*0);
}

if(minutos >= 60){
    hora++;
    minutos=(minutos*0);
    }
if(hora >= 24){
    hora= (hora*0);

        }

//Imprimir resultado:
console.log("La hora actual es: " + hora  + minutos + segundos )
