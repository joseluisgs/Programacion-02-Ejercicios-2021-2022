// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que nos indica los numeros impares entre 1 y 20, y la suma de ellos.
 */

// Zona de declaraciones
let suma=0;

//Desarrollo del programa;
for(let i=1; i <20; i++){
    
    if(i%2!=0)
    suma= (suma+i)

    console.log("ES IMPAR: " +i)
}
console.log("La suma total de los numeros impares de 1 a 20 es:" +suma)
