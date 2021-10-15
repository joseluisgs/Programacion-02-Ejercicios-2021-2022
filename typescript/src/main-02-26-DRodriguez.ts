// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Menu de salida con S o s.
 */

//Variables
let s: string;
let S;

//Iniciamos el programa
  do {
    s=read.question("(S/N): ")
    
  } while (s != 's' && s != 'S');
