/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Cálculo de la superficie y perímetro de un rectángulo.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Superficie y Perímetro de un rectángulo
// Zona de declaración de variables y constantes
let base: number;
let altura: number;
let perimetro: number;
let superficie: number;

/**
 * Preguntamos al usuario cuanto es el valor de la base y de la altura.
 */
//Entrada y salida principal
base = read.questionInt("Introduce la base ");
console.log(chalk.bold.blue(base));
altura = read.questionInt("Introduce la altura ");
console.log(chalk.bold.blue(altura));

/**
 * Con el dato ya guardado de base y altura, procederemos a realizar las dos formulas.
 * La del perimetro que es: (base + altura)* 2 y la superficie: base * altura.
 */
perimetro = 2 * (base + altura) ;
superficie = base * altura;

// Salida de textoS
console.log("El periemtro es " + perimetro);
console.log("La superficie es " + superficie);