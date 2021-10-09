// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Azahara Blanco Rodríguez
 * Dia: 8-10-2021
 * Función: te dice si un numero es primo o no
 * resolución: es primo: true/false
 */

let esPrimo : boolean ;
let numero : number;
let contador : number = 2;

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

    console.log("tu numero ha salido del if")
    
contador++
} while (esPrimo==true && numero>contador);

       
console.log("tu numero ha salido del do while")

console.log("tu numero es primo = "+esPrimo)
