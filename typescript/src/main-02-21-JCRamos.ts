// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determinar todos los numeros par que hay entre i y cualquier numero introducido por teclado
 * 
 */



/*Si queremos saber los numero pares que hay entre 1 y cualquier
numero que intruzcamos por teclado, creamos una variable.
*/

let n;
let suma=0;

//He desarrollado un bucle definido y uno secuancial
//para saber si el numero es par divido entre dos en cada iterracion, si es resto es igual a cero es par.
n=read.questionInt("Introduce un numero: ")
for(let i=1; i<=n; i++){
    
   if(i%2==0){
    
      console.log("Imprimir los numeros pares: "+i)
      suma+=i;
   }
    
}

console.log("los numero pares entre 1 y 20 son: "+suma);