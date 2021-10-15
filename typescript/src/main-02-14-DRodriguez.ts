// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que nos indica el numero de cifras que tiene un numero.
 */

//Variables
let numero: number;
let contador= 1;


//Iniciamos el programa
numero= read.questionInt("Dime el numero del que quieres saber el número de cifras");

while (numero>= 10){
  numero= numero%10 
  contador++;
} 
    console.log("El resultado es:" + contador);