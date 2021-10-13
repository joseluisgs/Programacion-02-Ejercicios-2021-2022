import read from 'readline-sync';
import chalk from 'chalk';
import { format } from 'path/posix';
import { CopyOptions } from 'fs';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 11/10/2021
 * GitHub: JanCRM
 * Función: El juego dle numeor secreto.
 */


//Declaraccion de variables
let aleatorio:number;
let intentos: number;
let continuar=true;
let opcion:string;
let num:number;
let acertado=false;




//Hare el juego del numero secreto utilizando bucles haces mientras.
//creando un menu al final preguntandole al usuario si desea seguir jugando o no.

do{
    //Especificamos el numero de intentos con el que contamos, 
    //mas adelante ese numero ira disminuyendo.
    intentos=5;
    console.log(chalk.blue.bold("Adivina el numero secreto:"));
    aleatorio=Math.floor(Math.random()*100)+1;
    
    do{
        //al entrar aqui resta uno al numero de intentos que hemos definido.
        intentos=intentos-1;
    
        do{
            num=read.questionInt("Introduce un numero entre 1 y 100: ");
            //En esta condicion especifico el rango de numeros que queremos adivinar.
        }while(num < 1 || num > 100)
        
        if(num > aleatorio){
            console.log("El numero secreto es menor.");
            console.log("Te quedan "+intentos+" intentos.")
        }else if(num < aleatorio){
            console.log("El numero secreto es mayor.");
            console.log("Te quedan "+intentos+" intentos");
        }else if(num == aleatorio){
            console.log(chalk.blue.bold("Has acertado, el numero secreto es "+aleatorio+", necesitaste "+(5-intentos)));
        
            acertado=true;
        }
        if(intentos == 0 && !acertado){
            console.log(chalk.red.bold("Has perdido."));
        }

    }while(intentos >= 1 && acertado==false)

    //menu para decidir si continuar jugando.
    opcion=read.question(" ¿Quieres seguir jugando? (s/n)");
    if(opcion=="s" || opcion=="S"){
        continuar=true;
    }else{
        continuar=false;
    }

}while(continuar)
console.log(chalk.red.bold("Fin del juego"));


