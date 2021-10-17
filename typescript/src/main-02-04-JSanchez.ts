// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync"

/**
 * Autor: Jorge Sánchez Berrocoso
 * Dia: 16/10/2021
 * Función: Calcular la media de los numero introducidos por consola.
 */

//Definir variables  
let mediaDecimales: number
let n1: number
let n2: number
let n3: number
let cantidadNumeros:number

//Preguntar numeros
n1 = read.questionInt("Ingresa el primer numero:");
n2 = read.questionInt("Ingresa el segundo numero:");
n3 = read.questionInt("Ingresa el tercer numero:");
cantidadNumeros = read.questionInt("Ingresa la cantidad de numeros que quieres hacer la media:");

mediaDecimales=(n1+n2+n3)/cantidadNumeros

console.log("La media truncada es:"+Math.trunc(mediaDecimales))
console.log("La media con decimales es:"+mediaDecimales)