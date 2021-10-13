/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Cálculo de la superficie y perímetro de un circulo.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Programa Superficie y Perímetro de un circulo
// Zona de declaración de variables y constantes
// En este caso ya que el número pi es un valor único, lo pondremos como una constante.
let radio: number;
let perimetro: number;
let superficie: number;
const NUMERO_PI= 3.1415;

/**
 * Preguntamos al usuario cuanto es el valor del radio.
 */
//Entrada y salida principal
radio = read.questionInt("Introducir el radio ");
console.log(chalk.bold.blue(radio));

/**
 * Con el dato ya guardado del radio, procederemos a realizar las dos formulas.
 * La del perimetro que es: 2 * PI * radio y la superficie: PI * radio * radio.
 */
perimetro = 2 * NUMERO_PI * radio;
superficie = NUMERO_PI * radio * radio;

// Salida de textoS
console.log("El periemtro es " + perimetro);
console.log("El area es " + superficie);