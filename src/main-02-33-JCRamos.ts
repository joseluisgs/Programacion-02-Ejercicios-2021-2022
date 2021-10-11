// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 09/10/2021
 * GitHub: JanCRM
 * Función: Genera numeros aleatorios en 1 y 49.
 * Imprimiendo 6 numeros aleatorios.
 * 
*/



//variables
let aleatorio: number;


//He creado un bucle definido ya que se la cantida de numeros que quiero.
for(let i=1; i<=6; i++){
    aleatorio= Math.random()*49;
    console.log("Los numeros premiados son: "+aleatorio.toFixed());
}