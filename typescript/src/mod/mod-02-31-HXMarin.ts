import read from 'readline-sync';
import chalk from 'chalk'
/**
 * Autor: Héctor Xavier Marín
 * Día: 11/10/21
 * Función: Este ejercicio indica si el número dado por teclado es primo o no.
 * Resolución: esprimo = true || false
 */
export function primos(){
//Declaración de Variables:

let num : number = 0;
let esprimo : boolean = true;
//Inicio del Programa:

num = read.questionInt("Dime un Numero: ");
if (num == 2) {
    esprimo = true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {

      if (num % i != 0) {
        esprimo = true;
      } else if (num == i * i) {
       esprimo = false;
       break;
      } else {
        esprimo = false;
        break;
      }
    }
  } else {
   esprimo = false;
  }
  console.log("Tu Número" + num + ": " + esprimo);
  return primos;
}

 