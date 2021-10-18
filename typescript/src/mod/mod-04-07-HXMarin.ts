import read from 'readline-sync';
import chalk from 'chalk'

function dinero(){
/**
 * Autor: Héctor Xavier Marín
 * Ejercicio: 04-07
 * Procedimiento: Hacer una función para sacar las tarifas
 */

//Declaración de Variables:
const PASTA_DIURNA: number =20;
const PASTA_NOCTURNA : number =35;
const HORAS_DOMINGO_DIURNAS : number =10;
const HORAS_DOMINGO_NOCTURNAS : number = 15;

let numeroHorasDiurnas :number;
let numeroHorasNocturnas :number;
let salario: number;
let diaSemana: string;
//Inicio del Programa:
numeroHorasDiurnas= read.questionInt("Dime las Horas trabajadas DE DIA : ");
numeroHorasNocturnas = read.questionInt("Dime las Horas trabajadas DE NOCHE: ");
diaSemana = read.question ("Dime el dia de la Semana: ");
if(diaSemana == "domingo"){
salario = HORAS_DOMINGO_DIURNAS*(PASTA_DIURNA + numeroHorasDiurnas) + numeroHorasNocturnas * (PASTA_NOCTURNA + HORAS_DOMINGO_NOCTURNAS);

}else{
   salario = (PASTA_DIURNA + numeroHorasDiurnas) + (PASTA_NOCTURNA+numeroHorasNocturnas)
}
 console.log("Tu salario de " +diaSemana + " Es de: " +salario+ " €");

return salario;
}

export default {dinero}