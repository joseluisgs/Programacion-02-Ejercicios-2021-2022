// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-05-02-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 14/10/2021
 * Descripción: programa modular para calcular el area y circunferencia de un circulo.
*/
 let radio:number
 let totalCircunferencia:number
 let totalArea:number
radio= read.questionInt("Dime la medida deL radio: ")


  totalCircunferencia= aux.esCircunferencia(radio);
  totalArea= aux.esArea(radio);
  
  
//Imprimimos por pantalla el resultado  
console.log("La circunferencia del circulo es de: " +totalCircunferencia);
console.log("El area total del circulo es de: " +totalArea)

