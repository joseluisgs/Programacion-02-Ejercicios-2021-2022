// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { DEFAULT_MIN_VERSION } from 'tls';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Introducir numeros hasta que sea mayor de 100.
 */


// Zona de declaraciones:
let dimenumero:number;

//Inicio del programa:
//Desarrollo del programa;    
do{
    dimenumero= read.questionInt("Dime el numero: ");
    if(dimenumero<=100)
    dimenumero
}while (dimenumero<=100) {
    
}