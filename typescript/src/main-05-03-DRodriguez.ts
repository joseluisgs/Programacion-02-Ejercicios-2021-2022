// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-05-03-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 14/10/2021
 * Descripción: programa modular para saber si un numero leido por teclado es positivo o negativo.
*/
 let numero:number
numero= read.questionInt("Dime el numero: ")

aux.esPositivo(numero);
