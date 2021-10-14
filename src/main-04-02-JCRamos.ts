import read from 'readline-sync';
import chalk, { hwb } from 'chalk';
import resta from './mod-relacion-03/mod-04-02-JCRamos';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * GitHub: JanCRM
 * Función:
 */

console.log("Restas sucesivas.");
let dividendo=read.questionInt("Introduce el dividendo: ");
let divisor=read.questionInt("Introduce el divisor: ");
resta.restaSucesiva(dividendo,divisor);
