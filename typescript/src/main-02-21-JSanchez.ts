// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";


/**
 * Autor: Jorge Sanchez Berrocoso
 * Dia: 16/10/2021
 * Función: Determinar todos los numeros par que hay entre i y un numero introducido por teclado
 */


let n;
let suma=0;

n=read.questionInt("Introduce un numero")
for(let i=1; i<=n; i++){
    
   if(i%2==0){
    
      console.log("Imprimir los numeros pares: "+i)
      suma+=i;
   }
    
}

console.log("los numero pares entre 1 y 20 son: "+suma);