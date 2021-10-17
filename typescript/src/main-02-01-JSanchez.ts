// Programa Superficie y Perímetro de un cuadrado

// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";

/**
 * Nombre: Jorge Sanchez Berrocoso
 * Fecha: 16/10/2021
 * Funcion: Cálculo de la superficie y perímetro de un cuadrado.
 */


// Zona de declaración de variables
let lado: number;
let perimetro: number;
let superficie: number;

/**
 * Preguntamos el valor del lado cuadrado
 */
lado = read.questionInt("Introduce el lado ");


perimetro = 4 * lado ;
superficie = lado * lado;

console.log("El periemtro es " + perimetro);
console.log("La superficie es " + superficie); 
