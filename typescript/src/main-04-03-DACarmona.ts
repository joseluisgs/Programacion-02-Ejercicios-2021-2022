/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Suma los numeros pares hasta el número establecido.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import sumaPares from './mod/mod-04-03-DACarmona'

// Programa Suma Pares
// Zona de declaración de variables y constantes
let dato: number;

// Le pediremos al usuario hasta que número quiere sumar.
// Entrada de texto
dato= read.questionInt(chalk.bold.magenta("¿Hasta que numero quieres sumar?: "));

// Esta parte contiene un módulo que suma los pares hasta el limite que hemos pedido.
// Por lo tanto solo nos muestra el total de la suma.
console.log("El total de la suma es " + sumaPares(dato));