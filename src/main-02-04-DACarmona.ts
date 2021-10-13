/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Calcula la media entre 3 números dados por teclado..
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa clacular la media de 3 números pedidos.
// Zona de declaración de variables y constantes
let num1: number;
let num2: number;
let num3: number;
let media: number;

/**
 * Pediremos 3 números, cada valor se asiganara en las 3 variables que hemos creado.
 */
// Entrada de texto
num1 = read.questionInt("Primer valor ");
num2 = read.questionInt("Segundo valor ");
num3 = read.questionInt("Tercer valor ");

/**
 * Una vez asignado las variables, calcularemos la media, que es la suma de las notas, dividido entre el numero de notas que hay.
 * Como en este caso sabemos que solo habra 3 notas, el número de notas sera 3.
 */
media = (num1 + num2 + num3) / 3;

/**
 * La salida del programa sera dada de dos maneras distintas. Una con decimales y otra entera apoximada. Math.floor nos aproxima
 * los decimales al número entero.
 */
console.log("La media es " + media);
console.log("La media es " + Math.floor(media));