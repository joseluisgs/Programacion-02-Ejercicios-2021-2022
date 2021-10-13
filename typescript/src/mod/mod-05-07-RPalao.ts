import chalk from 'chalk';
import read from 'readline-sync';

/**
 * Funcion que devuelve el area 
 * @param anio Numero para saber si el año es bisiesto o no
 * @returns si el año es bisiesto
 */

function esConversor (pregunta:string) {
    //Variables
    let numero: number;
    let resultado: number = 0;

    //Inicio
        if(pregunta=='1') {
            numero = read.questionInt("Diga el numero que quiere conversar: ");
            resultado = (9/5*numero)+32;
        }else if(pregunta=='2') {
            numero = read.questionInt("Diga el numero que quiere conversar: ");
            resultado = (numero-32)/1.8000;
            
        }
    return resultado;
}


//Exportar funciones y procedimientos
export default {esConversor}