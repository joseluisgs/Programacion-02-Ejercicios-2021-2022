// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Buscamos el area y la circunferencia de una curculo.
 */


//Declaracion de variables
const NUM_PI=3.1416;
let r;
let a
let c;

//Vamos a buscar el area de un circulo

console.log("Vamos a buscar el area y la circunferencia de una circulo.")
r=read.questionInt("Introduce el radio del circulo: ")
//calculamos el area de una circulo
a=NUM_PI*(r*r);
console.log("El valos del area es: "+a);

//Aqui vamos a calcular la circunferencia dle circulo

console.log("Teniendo el rado podemos calcular la circunferencia del circulo con el mismo tamaña.")
c=NUM_PI*(2*r);
console.log("El valos de la circunferencia es: "+c);

