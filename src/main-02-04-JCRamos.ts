// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { clearScreenDown } from 'readline';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Calcula la media de tanto numeros como queramos.
 */





let notas;
let suma=0;
let media;
let n;
let acum=1;

//intriducimos numero de notas.
notas=read.questionInt("¿Cuantas notas quieres calcular? ");


//creamos el bucle while.
/**
 * utilizo un bucle mientras. Lo primero que hace es preguntar la cantida de notas que queremos comprobar,
 * acumulamos las notas en la variable suma, que luego la dividimos por la cantida de notas introducida.
 * 
 */
while(acum<=notas){
    
    n=read.questionInt("Introduce la nota numero "+acum+": ");
    suma=suma+n;
    acum=acum+1;
}

media=suma/notas;
console.log("La nota promedio es: "+media.toFixed());
console.log("La nota promedio es: "+media.toFixed(2));