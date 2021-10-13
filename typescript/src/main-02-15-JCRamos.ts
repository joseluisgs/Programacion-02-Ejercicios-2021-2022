// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Calcula cual es el mayor, menor y mediano de tes numeros
 * 
 */


//Declaracion de variables
let a;
let b;
let c;


//Lectura de los datos
a=read.questionInt("Introducir el valos de a: ");
b=read.questionInt("Introducir el valos de b: ");
c=read.questionInt("Introducir el valos de c: ");


//Utilizo un condicional para compara todos los numeros.
if(a>=b && a>=c && b>=c){
    console.log(+a+ " es mayor " +b+ " es el mediano " +c+ " menor");
}else if(a>=b && a>=c && c>=b){
    console.log(+a+ " es mayor " +c+ " es el mediano " +b+ " menor");
}else if(b>=a && b>=c && a>=c){
    console.log(+b+ " es mayor " +a+ " es el mediano " +c+ " menor");
}else if(c>=a && c>=b && a>=b){
    console.log(+c+ " es mayor " +a+ " es el mediano " +b+ " menor");
}else if(c>=a && c>=b && b>=a){
    console.log(+c+ " es mayor " +b+ " es el mediano " +a+ " menor");
}else if(b>=a && b>=c && c>=a){
    console.log(+b+ " es mayor " +c+ " es el mediano " +a+ " menor");
}