// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Calcular la jornada diaria trabajada.
 * 
 */


//Variables
const T_H_DIURNAS= 20;
const T_H_NOCTURNAS= 35;
const PLUS_DIURNAS_DOMINGO= 10;
const PLUS_NOCTURNAS_DOMINGO= 15;

let salario:number;
let diaSemana:string;
let hTrabajasDiurnas:number;
let hTrabajasNocturnas:number;


//para este ejercicio voy utilizar una estructura condicional doble.

diaSemana=read.question("En que dia de la semana has trabajado: ");
hTrabajasDiurnas=read.questionInt("Cuantas horas diurnas has trabajado: ");
hTrabajasNocturnas=read.questionInt("Cuantas horas nocturnas has trabajas: ");

//Compruebo que dia de la semana es, de esa forma realiza una operacion u otra.
if(diaSemana== "domingo"){
    salario= hTrabajasDiurnas*(T_H_DIURNAS + PLUS_DIURNAS_DOMINGO) + hTrabajasNocturnas * (T_H_DIURNAS + PLUS_NOCTURNAS_DOMINGO);
}else{
    salario=hTrabajasDiurnas*T_H_DIURNAS + hTrabajasNocturnas*T_H_NOCTURNAS;
}

console.log("Dia de la semana trabajo es "+diaSemana+ " con un salario de " +salario);