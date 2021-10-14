import read from 'readline-sync';
import chalk, { hwb } from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 13/10/2021
 * GitHub: JanCRM
 * Función: Algoritmo que calcule el cociente y el resto mediante resta sucesivas.
 *
 */


function restaSucesiva (dividendo:number, divisor:number){
  if(dividendo>0 && divisor>0){
  let cociente=0;
  while (dividendo>=divisor){
    dividendo=dividendo-divisor;
    cociente++;
  }
  console.log(chalk.green.bold("El resto es "+dividendo+chalk.blue.bold(" y el cociente es "+cociente)));
  }else {
    console.log("Uno de los valores introducidos son menor a 0.");
  }
}
export default {restaSucesiva}
