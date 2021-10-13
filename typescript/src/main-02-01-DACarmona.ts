/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Cálculo de la superficie y perímetro de un cuadrado.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk'


// Programa Superficie y Perímetro de un cuadrado
// Zona de declaración de variables y constantes
let lado: number;
let perimetro: number;
let superficie: number;

/**
 * Preguntamos al usuario cuanto es el valor del lado cuadrado.
 */
lado = read.questionInt("Introduce el lado ");
console.log(chalk.bold.blue(lado));

/**
 * Con el dato ya guardado de lado, procederemos a realizar las dos formulas.
 * La del perimetro que es: lado * 4 y la superficie: lado * lado.
 */
perimetro = 4 * lado ;
superficie = lado * lado;

// Salida de texto
console.log("El periemtro es " + perimetro);
console.log("La superficie es " + superficie); 



