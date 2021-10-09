// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Azahara Blanco Rodríguez
 * Dia: 8-10-2021
 * Función: ejercicio 34.ejercicio de quiniela
 * resolución:  15 numeros al azar entre 1,2,x
 */

//variables
let numero:number;

//inicio
console.log("aqui tienes tu numero quiniela deportiva :")
for (let contadorFor=0; contadorFor< 15; contadorFor++) {
    
    numero = (Math.trunc(Math.random() * 3))  +1
    
    if (numero !=3) {
        console.log(numero)
    } else {
        console.log("X")
    } 
}
console.log("¡¡espero que tengas suerte!!")
