// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Imprimir y sumar los numeros impares de numMenor al mayor.
 * 
 */


//Variables
let numMayor;
let suma;
let numMenor;

//Imprimir y sumar los numeros impares de numMenor al mayor.
//Introduccion de datos
console.log("Imprimir y sumar los numeros impares de menor valor al mayor.");
numMenor=read.questionInt("Introduce el numero de inicio que es menor: ");
numMayor=read.questionInt("Introduce el numero final ques sera mayor: ");
suma=0;
for(numMenor=0; numMenor<=numMayor; numMenor++){
    if(numMenor%2 !=0){
        
        console.log("estos son los numero impares: "+numMenor);
        suma+=numMenor;
    }
}
console.log("La suma de los numero impares es: "+suma);