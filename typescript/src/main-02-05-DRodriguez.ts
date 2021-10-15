// Zona de declaración de librerías y módulos propios o del sistema
import read, { questionInt } from 'readline-sync';
import chalk from 'chalk';
/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Indicamos si un numero es negativo o positivo.
 */


// Zona de declaración de variables y constantes
let numero: number;


//Inicio de programa
numero= read.questionInt("Dime el numero")
if(numero>=0){
    console.log("Tu numero es positvo")
}else{
    console.log("Tu numero es negativo")
}