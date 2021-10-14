/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 13/10/2021
 * Descripción : Ejercicio que calula el combinatorio de un número a partir de la funcion que calcula un factorial.
 */
import read from 'readline-sync';
import factorial from './mod-05-11-MSPinzon';

//Variables.
let coeficientePrimero : number;
let coefieficienteSegundo : number;
let combinatorio : number;

//Pido el número al usuario.
console.log('Escriba el primer coeficiente del número combinatorio que desea calcular.');
coeficientePrimero = read.questionInt();

console.log('Escriba el segundo coeficiente del número combinatorio que desea calcular.');
coefieficienteSegundo = read.questionInt();

//Uso la función del calculo de un número factorial para hallar el número combinatorio.
combinatorio = (factorial.calcularFactorial(coeficientePrimero)) / (factorial.calcularFactorial(coefieficienteSegundo)*factorial.calcularFactorial(coeficientePrimero-coefieficienteSegundo));
console.log('El número combinatorio de los coeficientes que ha introducido es ' + combinatorio);





