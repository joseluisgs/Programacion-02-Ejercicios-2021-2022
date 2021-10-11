// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: creacion de un menu para el usuario decida si quiere seguir o salir del programa.
 * 
 */



//Programa preguntar si desea continuar.
let opcion:string;
let continuar=false;

do{
    opcion=read.question("Desea terminar: ");
    

}while(opcion!="s" && opcion!="S")
if(continuar=true){
    
    console.log("Ha terminado el programa.");
}else{

    console.log("Continua en el programa.")
}
