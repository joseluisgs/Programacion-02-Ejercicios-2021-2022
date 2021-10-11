// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: calcular el coeficiente el resto con restas sucesivas.
 */


//Declaracion de variables
let dividendo;
let divisor;
let conciente=0;


//Lectura de datos
dividendo=read.questionInt("Introduzca el dividendo: ");
divisor=read.questionInt("Introduzca el divisor: ");

//Bucle mientras.
//En la condicion le digo que entre solo si el dividendo es mayor.
//El la operacion que realiza le digo que, el dividendo es igual a la resta de si mismo entre el divisor,
//en cada vuelta de bucle va acumulando la resta de dividendo, y el resto son las veces que realiza la esta.
while(dividendo>=divisor){
    dividendo=dividendo-divisor;
    conciente++;
    
}
console.log(chalk.green.bold("El resto es : "+dividendo));
console.log(chalk.redBright.bold("El cociente es:  "+conciente));

