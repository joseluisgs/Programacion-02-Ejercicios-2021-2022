// Zona de declaración de librerías y módulos propios o del sistema
import read, { setDefaultOptions } from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Esto sería el ejercicio 34
 * Dia: 09/10/2021
 * Función: Genera combinaciones al azar de una quiniela de futbol.
 * 
 * Genera una cadena con una combinacion aleatoria de 1, 2 y
 * @returns Una cadena con la combinacion generada
 */



function GeneradorDeCombinaciones() {
//Declaracion de variables
let resultado:number;
let aciertos:string=" ";

//He creado un bucle definido ya que se la cantida de numeros que quiero.

    for(let i=1; i<=15; i++){

        resultado=Math.floor(Math.random()*2);
        
        switch(resultado){
            case 0:
                aciertos=aciertos+'1 '
                break;
            case 1:
                aciertos=aciertos+'x '
                break;
            case 2:
                aciertos=aciertos+'2 '
                break;
            default:
                console.log("No hay ningun resultado");
                break;
        }
    }
    return aciertos;
}


/**
 * Comprueba cuantos aciertos ha tenido la apuesta en comparacion con ganadora
 * Esto sería el ejercicio 35
 * @param combinacion apuesta y ganadora
 * @returns numero de aciertos en la combinacion apuesta y la combinacion ganadora
 */

function ComprobacionDeApuesta(apuesta:string, ganadora:string):number{
    
    let num_aciertos : number = 0;
    //con este for, comparamos cada puesto de los strings y si son correctos se suma 1 a los aciertos
    //para elegir cada puesto usamos string[puesto]
    //string.lenght nos da la longitud de la cadena, los puestos a los que se pueden acceder van de 0 a (longitud-1)

    for(let i : number = 0; i < apuesta.length; i++){
        if(apuesta[i] == ganadora[i]){
            num_aciertos++
        }
    } 
    return num_aciertos;
}

export default{GeneradorDeCombinaciones, ComprobacionDeApuesta}