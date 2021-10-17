// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";


/**
 * Autor: Jorge Sanchez Berrocoso
 * Dia: 16-10-2021
 * Función: Es primo o no
 * 
 */

//Definir variables

let esPrimo : boolean ;
let numero : number;
let contador : number = 2;


/**
 * Autor: Jorge Sanchez Berrocoso
 * Dia: 16/10/2021
 * Función: Numero primo
 * 
 */


//INICIO
numero = read.questionInt("dime tu numero")

do {
    

    console.log("el umero de esta vividiendo entre "+ contador)

        if (numero % contador == 0) {

            console.log("la division no ha dado restos por lo que es primo es falso")
            esPrimo=false

            } else {
            console.log("la division si ha dado restos por lo que es primo es verdadero")

            esPrimo=true
            }

    
contador++
} while (esPrimo==true && numero>contador);

console.log("tu numero es primo = "+esPrimo)