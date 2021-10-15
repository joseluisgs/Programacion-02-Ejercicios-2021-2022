// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-02-31-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 14/10/2021
 * Descripción: programa para saber si un numero es primo o no.
 */
 
let numero: number
numero = read.questionInt("Dime el numero del que quieres saber si es primo: ");

if (aux.esPrimo(numero)==false) {

 console.log("El número no es primo");
 
}
else {
  (aux.esPrimo(numero)==true)

  console.log("El numero es primo");
}
