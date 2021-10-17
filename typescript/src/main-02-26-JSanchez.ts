// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";

/**
 * Autor: Jorge Sanchez Berrocoso
 * Dia: 16/10/2021
 *
 * Funcion: Si desea terminar o no
 */

//Programa preguntar si desea continuar.
let terminar:string;
let continuar=true;

do{
    terminar=read.question("Desea terminar");
    

}while(terminar!="s" && terminar!="S")
if(continuar=true){
    
    console.log("Ha terminado el programa.");
}else{

    console.log("Continua en el programa.")
}




