/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que comprueba si tres números pedidos por teclado están ordenados de menor a mayor.
 */

import read from 'readline-sync';
import ordenar from "./mod-05-08-MSPinzon"

//Se pide al usario los 3 números a comprobar.
console.log('Escriba un número.');
let numero1= read.questionInt();

console.log('Escriba un segundo número.');
let numero2= read.questionInt();

console.log('Escriba un último número.');
let numero3= read.questionInt();

if(ordenar.estanOrdenados(numero1, numero2, numero3) == true){
    console.log('Los númeeros están ordenados de menor a mayor.');

}else if(ordenar.estanOrdenados(numero1, numero2, numero3) == false){
    console.log('Los números no están ordenados de menor a mayor.');
}

