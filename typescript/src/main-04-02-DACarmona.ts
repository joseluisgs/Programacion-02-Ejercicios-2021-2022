/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Dos números enteros, que calcula el cociente y el resto, mediante restas sucesivas.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Restas Sucesivas
// Zona de declaración de variables y constantes
let num1: number;
let num2: number;
let resto: number;
let contador = 0;

/**
 * Se le pedira al usuario que introduzca dos datos, un dividendo y un divisor.
 * Almacenaremos el dividendo en resto y asi no modificamos el valor asignado en num1.
 */
//Entrada
num1 = Number(read.question("Introduce el valor del dividendo "));
num2 = Number(read.question("Introduce el valor del divisor "));
resto = num1;

/**
 * Haremos un bucle que se realice mientras el resto sea mayor o igual que el num2 (divisor).
 * Al resto le iremos restando el num2 y el contador que sera el cociente ira incrementando.
 */
//Salida
while (resto >= num2) {
   resto = resto - num2;
   contador = contador + 1;
}

/**
 * Si el num1 es mayor o igual que el num2, nos mostrara el resto y el cociente que se calculo anteriormente.
 * Si no lo es, entonces no se podra realizar la operación y nos idicara que el divisor es mayor que el dividendo.
 */
if(num1 >= num2){
   console.log(chalk.yellow("El resto es " + resto));
   console.log(chalk.green("El cociente es " + contador));

} else{

   console.log(chalk.bold.red("El divisor es mayor al dividendo"));
}
