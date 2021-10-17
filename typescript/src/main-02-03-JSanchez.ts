// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync"

/**
 * Autor: Jorge Sánchez Berrocoso
 * Dia: 16/10/2021
 * Funcion: Calcular el area del circulo y la circunferencia
 */

//Definir variables
let radio: number
let NUM_PI = 3.14
let area: number
let circunferencia: number

//Preguntar el radio
radio = read.questionInt("Ingresa el radio");

area = NUM_PI * radio^2
circunferencia= 2*NUM_PI*radio

console.log("El area del circulo es:"+area)
console.log("La circunferencia del circulo es:"+circunferencia)
