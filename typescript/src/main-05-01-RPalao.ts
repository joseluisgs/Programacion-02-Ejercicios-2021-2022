// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-05-01-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 12/10/2021
 * Descripción: Ejercicio programa modular que calcule la superficie y el perímetro de un cuadrado
 * cuyo lado pediremos por teclado.
 */


//Variables

let lado: number;
let resultadoper: number;
let resultadosup: number;

//Inicio

lado = read.questionInt('Dime el lado del cuadrado: ');

    resultadoper = aux.esPerimetro(lado);
    resultadosup = aux.esSuperficie(lado);

console.log(chalk.green("El resultado del perimetro " + resultadoper ));
console.log(chalk.green("El resultado de la superficie " + resultadosup ));