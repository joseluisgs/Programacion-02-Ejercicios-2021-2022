import read from 'readline-sync';
import chalk from 'chalk'

 /**
 * Autor: Héctor Xavier Marín.
 * Ejercicio: Ejercicio 5 Página 4
 * Procedimiento: pedir Números hasta que el número leído esté comprendido entre 1 y 5.
 */
function numerosContados() {
    //Declaración de Variables:
    let number: number = 1;
    //Inicio del Programa:

    do {
        number = read.questionInt("Dime un numero: ")
    } while (number < 1 || number > 5)

    console.log("Tu numero es " + number);

    console.log("El programa ha finalizado.");
    
    }
    export default {numerosContados}