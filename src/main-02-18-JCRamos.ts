import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determinar el precio de un billete de tren.
 * 
 */


//Variable
let precioBillete=0;
let diasEstancia=0;
let distanciaKm=0;
const COSTE_KM=2.5;

//Entradas de datos 
distanciaKm=read.questionInt("Introduce la distancia: ");
diasEstancia=read.questionInt("Introduce los dias de estancia: ");


//he utilzado condicionales anidados para obtener los diferentes resultado.
if(distanciaKm<=800 && diasEstancia<=7){
    precioBillete=COSTE_KM*distanciaKm;
    console.log((chalk.yellow.bold("Precion del billete: "+precioBillete)));
}else if(distanciaKm>=800 && diasEstancia>=7){
    precioBillete=COSTE_KM*distanciaKm-(30/100);
    console.log((chalk.blue.bold("Coste del billete con una distancia superior a 800km y una estancia superior a 7 dias, tiene un descuento del 30%: "+precioBillete))); 
}else if(distanciaKm>=800 && diasEstancia<=7){
    precioBillete=COSTE_KM*distanciaKm;
    console.log((chalk.green("Precion del billete: "+precioBillete)));
}
