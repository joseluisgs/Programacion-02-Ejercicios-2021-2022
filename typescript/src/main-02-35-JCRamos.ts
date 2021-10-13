// Zona de declaración de librerías y módulos propios o del sistema
import read, { setDefaultOptions } from 'readline-sync';
import chalk from 'chalk';
import quiniela from '../mod-02-quiniela-JCRamos';


/**
 * Autor: Jan Carlos Ramos Martínez
 * GitHub: JanCRM
 * Esto sería el ejercicio 35
 * Dia: 09/10/2021
 * Función: Comprobacion de aciertos.
 * 
 */

//Declaracion de variable
let apuesta:string;
let ganadora:string;
//Desde aqui llamo a las funciones
apuesta=quiniela.GeneradorDeCombinaciones();
ganadora=quiniela.GeneradorDeCombinaciones();


console.log("La apuerta generada es: "+apuesta);
console.log("La combinacion ganadora es :"+ganadora);
console.log("Aciertos conseguidos ",quiniela.ComprobacionDeApuesta(apuesta,ganadora));

