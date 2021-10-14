import read from 'readline-sync';
import chalk from 'chalk';
import salario from './mod-relacion-06/mod-06-04-JCRamos';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 14/10/2021
 * GitHub: JanCRM
 * Función: llamada a la funcion salario, devuelve el salario mensual de un trabajador.
 */


let salarioDespuesImpuestos;
let numeroDeHoras=read.questionInt("Dime el numero de horas que has trabajo esta semana: ");
let precioHoras=read.questionInt("Dime el precio de horas: ");
let salarioM=salario.salario(numeroDeHoras, precioHoras);
console.log("Salario mensual antes de impuestos: "+salarioM);
salarioDespuesImpuestos=salario.salarioImpuestos(salarioM);
console.log("Salario mensual despues de impuestos "+salarioDespuesImpuestos);

