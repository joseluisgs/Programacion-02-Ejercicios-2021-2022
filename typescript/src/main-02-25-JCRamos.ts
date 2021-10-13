// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Calcular la media de los numero introducidos por consola.
 * 
 */



//Calcular la media de los numero introducidos por consola
let cant=0;
let valor;
let suma=0;
let media;


//En este ejercicio vamos a utilizar una bucle hacer mientras, 

//este es un bucle indefinido, y como condicion le he ducho que mientras 
//el valor introducido sea mayor a 0 me siga preguntando, una vez terminemos nois dara la media
//y la cantidad de numeros introducidos.
do{
    cant++;
    valor=read.questionInt("Introduce el valor numero " +cant+ ": ");
    suma=suma+valor;
}while(valor>0)

media=suma/cant;
console.log("La media es: "+media);
console.log("La cantidad de numero introducidos es: "+(cant-1));