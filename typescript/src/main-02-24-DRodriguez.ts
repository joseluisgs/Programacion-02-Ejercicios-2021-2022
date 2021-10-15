// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos la media de 10 numeros.
 */


// Zona de declaraciones
let num1:number;
let num2:number;
let num3:number;
let num4:number;
let num5:number;
let num6:number;
let num7:number;
let num8:number;
let num9:number;
let num10:number;
let media:number;

//Inicio del programa:
num1= read.questionInt("Dime el primer numero")
num2= read.questionInt("Dime el segundo numero")
num3= read.questionInt("Dime el tercer numero")
num4= read.questionInt("Dime el cuarto numero")
num5= read.questionInt("Dime el quinto numero")
num6= read.questionInt("Dime el sexto numero")
num7= read.questionInt("Dime el septimo numero")
num8= read.questionInt("Dime el octavo numero")
num9= read.questionInt("Dime el noveno numero")
num10= read.questionInt("Dime el decimo numero")


//Desarrollo del programa;
media=((num1+num2+num3+num4+num5+num6+num7+num8+num9+num10)/10)

//Imprimir resultado:
console.log("La nota media de estos 10 numeros es: " +media)

