// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk, { red } from 'chalk';
import { match } from 'assert';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Realizar la raiz cuadrada de un numero positivo.
 */



//variable
let n;

console.log("Introduce el numero del que quieres hayas la raiz cuadrada.");
n=read.questionInt();

/**
 * Utilizo un condicional, que despues de comprobar que el numero es positivo,
 * realiza la raiz cuadrado de ese numero.
 */
if(n>=0){
    console.log(Math.sqrt(n));
}
else{
    console.log("El numero introducido es negativo, no se puede realizar la operacion.");
    }