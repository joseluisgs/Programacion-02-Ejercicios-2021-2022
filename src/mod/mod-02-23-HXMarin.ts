import read from 'readline-sync';
import chalk from 'chalk'
/**
 * Autor: Héctor Xavier Marín
 * Día: 11/10/21
 * Función: Este ejercicio indica el resultado del factorial de un número pedido por teclado.
 * Resolución: esprimo = true || false
 */
export function factoriales(){
//Declaración de Variables:
let numero : number;
let factorial = 1;
//Inicio del Programa:
numero= read.questionInt("Dime un numero: ")
for (let i = 1; i<=numero; i++) 
  (factorial= factorial *i);

console.log("Tu resultado es : " + factorial);
  return factoriales;
}

