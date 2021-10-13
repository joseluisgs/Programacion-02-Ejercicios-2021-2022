/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Identificación de si un número es positivo o negativo.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Identificador de número
// Zona de declaración de variables y constantes
let num: number;

/**
 * Pediremos al usuario que ingrese un numero. Se asignara en la variable num que hemos creado.
 */
// Entrada de texto
num = read.questionInt("Escribir un número ");
console.log(chalk.bold.blue(num));

/**
 * Para la identificación del número tendremos que utilizar una condición.
 * Si el numero introducido es mayor o igual que 0, la respuesta sera "El numero es positivo".
 * Si el número es menor que 0, entonces el mensaje sera otro y dira "El número es negativo".
 */
if(num >= 0){
   console.log("El número es positivo")
}else{
   console.log("El número es negativo")
}