// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determinar si un año es bisiesto, y devolver si el numero de dias
 * del mes que que corresponde a ese año.
 * 
 */

//Declaracion de variables

let anio:number;
let esBisiesto=true;
let mes:string;


//Introduccion de datos

anio=read.questionInt("Introduce el año para saber si es bisiesto: ");
mes=read.question("Introduce el mes: ");


//Conditione para determinar si el año introducido es bisiesto.
if(anio % 4==0 && anio % 100 != 0 || anio % 400 == 0){
    esBisiesto=true;
    console.log("El año "+anio+ " es bisiesto");
}else{
    esBisiesto=false;
    console.log("El año "+anio+ " no es bisiesto");
}

//Un segun con cada uno de los meses.
switch(mes){
    case "enero" && "1":
        console.log("El mes de enero tiene 31 dias");
        break;

    case "febreo" && "2":
         if (esBisiesto==true)
         console.log("El mes de febrero tiene 29 días");
         else
         console.log("El mes de febrero tiene 28 días");
         break;

    case "marzo" && "3":
         console.log("El mes de enero tiene 31 dias");
         break;

    case "abril" && "4":
          console.log("El mes de enero tiene 30 dias");
        break;

    case "mayo" && "5":
        console.log("El mes de enero tiene 31 dias");
        break;

    case "junio" && "6":
        console.log("El mes de enero tiene 30 dias");
        break;

    case "julio" && "7":
        console.log("El mes de enero tiene 31 dias");
        break;

    case "agosto" && "8":
        console.log("El mes de enero tiene 30 dias");
        break;

    case "septiembre" && "9":
        console.log("El mes de enero tiene 31 dias");
        break;

    case "octubre" && "10":
        console.log("El mes de enero tiene 31 dias");
        break;

    case "noviembre" && "11":
        console.log("El mes de enero tiene 30 dias");
        break;

    case "diciembre" && "12":
        console.log("El mes de enero tiene 31 dias");
        break;

    default:
        console.log("El mes ingresado no existe");
        break;
    
}




/*function esbisisto(anio:number):boolean{
    let esBisiesto:boolean;
    if(anio % 4==0 && anio % 100 != 0 || anio % 400 == 0){
        esBisiesto=true;
        
    }else{
        esBisiesto=false;
        
    }
    return esBisiesto;
}*/