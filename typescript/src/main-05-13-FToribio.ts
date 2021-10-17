/**
 * Nombre: Francisco Toribio Respaldo
 * GitHub: frantoribio
 * Fecha: 09/10/2021
 * Descripción: Pruebas de las estructuras principales de programación.
 */

//Zona de declaración de librerías, módulos propios y módulos del sistema.

import read from 'readline-sync';
import chalk from 'chalk';
import primo from './mod/mod-05-13-FToribio'

// Zona de declaración de variables y constantes.
// Variables con let y constante con const
// Tipos: number (con signo y sin signo incluyendo decimales), string (cadenas y carácteres) y boolean (true o false)

let contador, numero: number;

//presentación

primo.presentacion();

console.log(chalk.blue("Programa que dice si un numero introducido es primo o no"));

//introducción del número por consola

numero = read.questionInt (chalk.greenBright("Introduce un numero que no sea el 1: "));

if(numero<=1){
    do {
        numero = read.questionInt (chalk.red("Por favor, introduce un numero mayor que 1: "));
}
while (numero<=1);}
//realizamos la función que determina si un número es primo

primo.esPrimo(numero);

if (primo.esPrimo(numero)){
      console.log(chalk.green(numero + " es primo"));

    }else{console.log(chalk.yellow(numero + " no es primo"));
    }
