// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-05-01-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 14/10/2021
 * Descripción: programa modular para calcular la superficie y perimetro de un cuadrado.
*/

/**Comenzamos declarando las variables, en este caso el valor de cada lado y 
* el resultado de la superficie y el perimetro.
*/
 let lado:number
 let totalPerimetro:number
 let totalSuperficie:number
lado= read.questionInt("Dime la medida de uno de los lados: ")

//Hacemos la llamda a las funciones que tenemos en el modulo.
  totalPerimetro= aux.esPerimetro(lado);
  totalSuperficie= aux.esSuperficie(lado);
  
  
//Imprimimos por pantalla el resultado  
console.log("El perimetro del cuadrado es de: " +totalPerimetro);
console.log("La superficie total del cuadrado es de: " +totalSuperficie)

