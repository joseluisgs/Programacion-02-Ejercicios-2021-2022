/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 06/10/2021
 * Descripción : Ejercicio que covierte de Centígrados a Farenheit y viceversa.
 */

import read from 'readline-sync';
import temperaturaEnGrados from "./mod-05-07-MSPinzon";
import temperaturaEnFarenheit from "./mod-05-07-MSPinzon";

//Variables.
let eleccionUsuario: string;

//Se pide al usuario la conversión que quiere realizar.
console.log('Si desea convertir de grados Centígrados a Farenheit pulse G, si desea lo contrario puse F.');
eleccionUsuario = read.question();

//Condicional que pide la temperatura una vez sabida la elección del usuario para usar la función correspondiente.
if ((eleccionUsuario == "G") || (eleccionUsuario == "g")){

    console.log('Introduzca la temperatura que desea convertir');
    let gradosCentigrados = read.questionFloat();
    console.log (gradosCentigrados + ' ºC equivale a ' + temperaturaEnGrados.conversionGradosCentigrados(gradosCentigrados) + ' Farenheit');
    

}else if(eleccionUsuario == "D" || (eleccionUsuario == "d")){

    console.log('Introduzca el número que desea convertir');
    let farenheit = read.questionFloat();
    console.log (farenheit + ' Farenheit equivale a ' + temperaturaEnFarenheit.conversionFarenheit(farenheit) + ' ºC');

}

