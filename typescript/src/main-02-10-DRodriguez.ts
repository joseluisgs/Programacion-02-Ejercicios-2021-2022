// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Conversor de temperatura de Celsious a Farenheit y de Farenheit a Celsious.
 */


//PROGRAMA CONVERSOR TEMPERATURAS
//Variables
let conversor: number;
let farenheit: number;
let celsious: number;

//Iniciamos el programa
console.log("A que unidad de medidas convertimos: Farenheit [1] Celsious [2]");
conversor=read.questionInt();

switch(conversor){
    case 1:
        celsious=read.questionInt("Introduce los datos en CELSIOUS:");
        farenheit= ((9/5))*celsious;2
        console.log("La temperatura en Farenheit es de: " + farenheit)
    case 2:
        farenheit=read.questionInt("Introduce los datos en FARENHEIT");
        celsious=((farenheit-32)*5)+32;
        console.log("La temperatura en CELSIOUS es de: " + celsious);
    break;
    default:
        console.log("El dato introducido es INCORRECTO, intentelo de nuevo")

}