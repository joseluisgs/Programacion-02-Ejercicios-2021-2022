import read, { setDefaultOptions } from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Esto sería el ejercicio 34
 * Dia: 09/10/2021
 * Función: Genera combinaciones al azar de una quiniela de futbol.
 * 
 * 
*/

let resultado:number;
//He creado un bucle definido ya que se la cantida de numeros que quiero.
//ademas he utilizado un switch para seleccionar la opcion del numero generado.
    for(let i=1; i<=15; i++){
        
        //resultado = (Math.trunc(Math.random()*3));
        resultado=Math.floor(Math.random()*3);
        console.log(resultado);
        console.log("Partido "+i);
        switch(resultado){
            case 0:
                console.log("1");
                break;
            case 1:
                console.log("x");
                break;
            case 2:
                console.log("2");
                break;
            default:
                console.log("No hay ningun resultado");
                break;
        }
    }