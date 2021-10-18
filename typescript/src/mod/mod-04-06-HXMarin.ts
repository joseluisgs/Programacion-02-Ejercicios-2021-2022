import read from 'readline-sync';
import chalk from 'chalk'

function tren (){
//Declaración de Variables:
let distancia : number = 0;
const PRECIO_KM = 2.5;
let dias : number=0;
let precio : number = 0;

//Inicio del Programa:

distancia = read.questionInt("Dime La distancia a recorrer: ");
dias = read.questionInt("Dime cuantos días de estancia:");
if(dias>=7 && distancia>=800){
  precio = (distancia  + dias)/PRECIO_KM;
  precio = (precio % 30);
 
}else{
    precio = (distancia + dias)/PRECIO_KM;
}
console.log("Este es el precio del billete: " + precio.toFixed(2) + '€');
    return tren;
} export default {tren}