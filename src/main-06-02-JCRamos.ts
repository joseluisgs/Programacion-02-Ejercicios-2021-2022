import read from 'readline-sync';
import chalk from 'chalk';
import parimpar from  './mod-relacion-06/mod-06-02-JCRamos';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 14/10/2021
 * GitHub: JanCRM
 * Función: llamadaa la funcino de numeros pares o impares.
 */

//llamada a la funcion.
console.log("Qué que quieres imprimir");
let num=read.question();
parimpar.numParImpar(num);
