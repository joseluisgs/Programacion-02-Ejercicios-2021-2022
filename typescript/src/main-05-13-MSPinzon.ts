/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 13/10/2021
 * Descripción : Ejercicio que calula si un número es primo.
 */
import read from 'readline-sync';
import primo from './mod-05-13-MSPinzon';

let numero : number;

console.log('Introduzca el número que desea saber si es primo.');
numero = read.questionInt();

if(primo.esNumeroPrimo(numero) == false){
    console.log ('El número que ha introducido no es primo.');

}else if (primo.esNumeroPrimo(numero) == true) {
    console.log ('El número que ha introducido es primo.')
}

