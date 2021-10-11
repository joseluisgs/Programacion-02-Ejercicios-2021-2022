// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Calcular el factorial de numeros enteros.
 * 
 */



//Calcular el factorial de un numero entero

//Variable
let num;
let fact;
//Entrada de datos.
num=read.questionInt("Introduce el numero del que quieres saber el factorial: ");

fact=1;
//la variable i la igualo al numero introducido por teclado, 
//de esta forma podemos rstar uno en cada iteracion, luego acumulamos en una variable
//la multiplicacion del numero con el siguiente que es menor.
for(let i=num; i>1; --i){
    console.log("valor de i "+i);
    fact*=i;
    
}
console.log("El resultado es: "+fact);
