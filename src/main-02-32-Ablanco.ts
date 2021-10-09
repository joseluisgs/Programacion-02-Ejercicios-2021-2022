// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Azahara Blanco Rodríguez
 * Dia: 8-10-2021
 * Función: te escrive los numero primos desde 3 hatsa donde tu digas
 * resolución: es primo: true/false
 */

let esPrimo : boolean ;
let numero : number = 1;
let contador : number = 2;
let numeroFin

//INICIO
numeroFin=read.questionInt("¿hasta que numero quieres imprimir numeros primos? Numero: ")


for (let index = 2; index < numeroFin; index++) {

    esPrimo=true
    do {

         if (numero % contador == 0) {
         esPrimo=false
         } else {
            esPrimo=true
        }

        contador++
    } while (esPrimo==true && numero>contador);


    if (esPrimo==true) {
        console.log(numero +", ")
    }
contador=2
numero++
}
console.log("programa finalizado")