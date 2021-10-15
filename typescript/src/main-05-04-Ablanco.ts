import read from 'readline-sync';
import chalk from 'chalk';
import mates from  './modulos-azahara-todos'

//inicio de programa
let numeroAnalizado :number;
let respuestaPrograma : boolean;
let quiereSiSalir : boolean ;

// do while para repetir el programa las veces que queramos
do {
    

    //leeremos  un numero por teclado
    numeroAnalizado=read.questionInt("¿Que numero quieres comprobar?: ")

    //hacer calculo de si es o no positivo
    respuestaPrograma=mates.numeroEsPar(numeroAnalizado)

    //dar respuesta
    mates.escriveSiEsPar(respuestaPrograma , numeroAnalizado)

    //fin de program?
    quiereSiSalir = mates.quiereSair()

} while (quiereSiSalir == false );

//fin de programa

console.log("fin de programa")