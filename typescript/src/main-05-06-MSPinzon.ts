/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que calula si un número tiene decimales.
 */
import read from 'readline-sync';
import decimal from './mod-05-06-MSPinzon';

//Variables.
let numero: number;

//Pido el número al usuario.
console.log('Escriba un número real por teclado para averiguar si tiene decimales.');
numero = read.questionFloat();

if (decimal.tieneDecimales(numero) == true){
    console.log("El número introducido tiene decimales");
}else{
    console.log("El número introducido no tiene decimales");
}

