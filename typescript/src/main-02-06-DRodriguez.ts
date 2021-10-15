// Zona de declaración de librerías y módulos propios o del sistema
import read, { questionInt } from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos la raiz cuadrada de un numero siempre que sea positivo.
 */


// Zona de declaración de variables y constantes
let numero: number;


//Inicio de programa
numero= read.questionInt("Dime el numero")
if(numero<0){
    console.log("Tu numero es negativo, no se puede realizar la operación")
}else{
    console.log(" la raiz cuadrada de tu numero es: " + Math.sqrt(numero))
}