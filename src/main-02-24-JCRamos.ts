// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: calcular la media de 10 numero introducidor por teclado.
 * 
 */



//Calcular la media de los numero introducidos por consola
let cant;
let valor;
let suma=0;
let media;


//Entrada de datos
cant=read.questionInt("Introduce la cantidad de numeros de lo que quieres saber la media: ");

//va ha iterar tantas veces como el valor de la variable cant, luego sumamos 
//cada valor introducido en cada iteracion, la suma de todo la dividimos por el numero
//por el numero de valores intrioducidos, asi obtenemos la media.
for(let i=1; i<=cant; i++){
    valor=read.questionInt("Introduce el valor numero " +i+ ": ");
    suma=suma+valor;
    
}
media=suma/cant;
console.log("La media es: "+media);