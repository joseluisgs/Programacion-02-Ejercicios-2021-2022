// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determina si el año introducido por teclado es bisiesto.
 */



//variables
let ano;

//Utilizon un condicional para, comprobar si el año introducido por teclado es bisiesto.
//Lectura el dato introducido por teclado.
ano=read.questionInt("introduce el año que quieres comprobar:");

if(ano%4==0 && ano%100!=0 || ano%400==0){
    
    console.log("El " +ano+ " es bisiesto");

}else{
    
    console.log("El año no es bisiesto")
    
}

