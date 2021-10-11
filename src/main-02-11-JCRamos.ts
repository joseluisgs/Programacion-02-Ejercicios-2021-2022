// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determina si los numeros introducidos por teclado estan ordenados
 * de menor a mayor.
 */


//Variables
let a;
let b;
let c;

//Lectura de datos
a=read.questionInt("Introduce el valor de a: ");
b=read.questionInt("Introduce el valor de b: ");
c=read.questionInt("Introduce el valor de c: ");

//creamos del condicional, para determinar si estan ordenados o no.
if(a<=b && a<=c){
    console.log((chalk.green.bold("Los numero estan ordenados")));

}else if(a==b && a==c){
    console.log((chalk.yellow.bold("Los numero tienen el mismo valor")));
}else{
    console.log((chalk.red.bold("Los numero estan desordenados")));
}