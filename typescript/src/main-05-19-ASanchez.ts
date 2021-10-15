/**
 * Nombre: Alejandro Sánchez Monzón
 * GitHub: AlejandroSanchezMonzon
 * Fecha: 15/10/2021
 * Descripción: En el siguiente programa introduciremos la fecha actual y la fecha de nuestro cumpleaños, una vez hecho esto,
 *              el programa analizará si, en base al número de día y mes, ya has cumplido años durante el actual o no.
 *              En caso de que si, el programa ejecutará las instrucciones directamente, en caso negativo,
 *              restará a tu supuesta edad 1, para deducir tu edad exacta.
 */

//Importación de librerías y módulos.
import read from 'readline-sync'
import yourage from './mod-05-19-ASanchez'
import chalk from 'chalk'

//Declaración de variables.
let birthDay: number;
let birthYear: number;
let birthMonth: number;

let actualDay: number;
let actualYear: number;
let actualMonth: number;

let age: number=0;

//Pedimos al usuario los datos necesarios para ejecutar el programa.
actualDay = read.questionInt("Indica que numero de dia es hoy: ");
actualMonth = read.questionInt("Indica el numero acorde al mes actual: ");
actualYear = read.questionInt("Indica el año actual: ");

//Línea estética de separación.
console.log(chalk.blue.bold("------------------------------------------------"));

birthDay = read.questionInt("Indica tu numero de dia de nacimiento: ");
birthMonth = read.questionInt("Indica numero acorde a tu mes de nacimiento: ");
birthYear = read.questionInt("Indica tu año de nacimiento: ");

//Línea estética de separación.
console.log(chalk.blue.bold("------------------------------------------------"));

console.log("Hoy es: " + actualDay + "/" + actualMonth + "/" + actualYear);
console.log("Naciste el: " + birthDay + "/" + birthMonth + "/" + birthYear);

//Línea estética de separación.
console.log(chalk.blue.bold("------------------------------------------------"));

//Paso a la función.
yourage.calculateAge(birthDay, birthMonth, actualDay, actualMonth, birthYear, actualYear);