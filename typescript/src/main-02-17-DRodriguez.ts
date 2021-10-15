// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que realiza ecuacion de segundo grado.
 */


// Zona de declaraciones
let a: number;
let b: number;
let c: number;
let solucion1: number;
let solucion2: number;


//Inicio del programa:
console.log("Vamos a resolver una ecuación de segundo grado, a continuación debe rellenar los datos.")
a= read.questionInt("Dime el valor de a: ")
b= read.questionInt("Dime el valor de b: ")
c=read.questionInt("Dime el valor de c: ")
//Desarrollo del programa:

solucion1= (- b +Math.sqrt((b**2) - (4*a*c)))/(2*a);
solucion2= (- b -Math.sqrt((b**2) - (4*a*c)))/(2*a);

//Imprimir resultado:
console.log("Los resultados de la Ecuación de segundo grado son: ")
console.log("La solución uno es : " + solucion1)
console.log("La solución dos es: " + solucion2)
