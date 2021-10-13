// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determinar por cuantas cifras esta compuesto el numero introducido.
 * 
 */


//Declaracion de variabnles
let numero;
let n_cifras=1;

numero=read.questionInt("Introduce el numero del que quieres saber de cuantas cifras esta compuesto: ");

//Bucle mientras

while(numero>=10){
    
    numero=numero/10;
    n_cifras++;
}
console.log(chalk.green.bold("El numero de cifras es: "+n_cifras));