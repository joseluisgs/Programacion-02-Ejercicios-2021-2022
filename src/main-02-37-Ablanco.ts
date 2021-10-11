import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Azahara Blanco Rodríguez 10-10-21
 * juego a adivinar el numero secreto
 * un juego
 */
//Variables

let n :number;
let nA  :number;
let contador = 0;
let continuar : string;

// inicio

// hacemos una repecicion de el programa para saber si quiere salor de el
do {

    //hacemos un numero a adivinar llamado nA
    nA = Math.trunc(Math.random()*100)+1

    //hacemos una repetición por di no adivina el numero que pueda intentarlo hasta 5 veces

    do {
        contador++ ; 
        console.log("este es tu intento numero" + contador)
        n=read.questionInt("¿cual crees que es el numero secreto?  ")

        //lo has adicinado

        if (n==nA) {
            // si
            console.log("has acertado!! has necesitado "+ contador + " intentos")
        } else {
            //no
            console.log("has fallado!!")
            if (nA<n) {

                //mallor
                console.log("tu numero  "+n+"  es mayor que el numero secreto!!")
            } else {
               //menor
                console.log("tu numero  "+n+"  es menor que el numero secreto!!")
            }
        }

    } while ( contador<5 && n!=nA);
    console.log("el numero secreto era" + nA)
    contador=0;
    continuar =  read.question("quieres continuar jugando?? S/N")

} while (continuar == 's' && 'S' ); 

console.log("fin de programa")