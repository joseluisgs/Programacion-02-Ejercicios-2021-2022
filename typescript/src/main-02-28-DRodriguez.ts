// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { DEFAULT_MIN_VERSION } from 'tls';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Pedimos numeros hasta que este entre 1 y 5.
 */

// Zona de declaraciones:
let dimenumero:number;

//Inicio del programa:
//Desarrollo del programa;    
do{
    dimenumero= read.questionInt("Dime el numero: ");
    if(dimenumero >1 && dimenumero >5)
    dimenumero
}while (dimenumero >1 && dimenumero >5) {
    
}