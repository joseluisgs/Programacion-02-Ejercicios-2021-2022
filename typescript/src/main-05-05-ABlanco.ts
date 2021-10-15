import read from 'readline-sync';
import chalk from 'chalk';
import mates from  './modulos-azahara-todos'

/**
 * @author Azahara blanco 15-10-2021
 * @description ejercicio modular que dice si un año es visiesto o no
 */

//inicio de programa
let anioAnalizado :number;
let respuestaPrograma : boolean;
let quiereSiSalir : boolean ;

// do while para repetir el programa las veces que queramos
do {
    
        
    //leeremos  un año por teclado que no sea 0 o negativo con un do_whil
    anioAnalizado=mates.pedirAnio()
    
    //hacer calculo de si el anio es bisiesto
    respuestaPrograma=mates.esVisiesto(anioAnalizado)

    //dar respuesta
    console.log("tu anio"+ anioAnalizado + " es visiesto es: " + respuestaPrograma )

    //fin de program?
    quiereSiSalir = mates.quiereSair()

} while (quiereSiSalir == false );

//fin de programa

console.log("fin de programa")