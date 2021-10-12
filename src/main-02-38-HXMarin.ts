import read from 'readline-sync';
import chalk from 'chalk'
import { factoriales } from './mod/mod-02-23-HXMarin';
import { primos } from './mod/mod-02-31-HXMarin';
import { colegio } from './mod/mod-02-29-HXMarin';
/**
 * Autor: Héctor Xavier Marín
 * Día: 11/10/21
 * Función: Este ejercicio es un menu que según se elige una de las tres opciones disponibles, elabora un ejercicio que pueden ser: Ej23,Ej29,Ej31.
 * Resolución: esprimo = true || false
 */

for(let i :number=1 ; i !=0; ){
    console.log("Ejercicio 23");
    console.log("Ejercicio 29");
    console.log("Ejercicio 31");
    console.log("0 Para Salir");
    i= read.questionInt("Elige una opcion: ");
    switch(i){
        case 23:
            factoriales();
            break;
        case 29:
           colegio();
            break;
        case 31:
            primos();
            break;
        case 0:
            console.log("Salir")
            break;
        default:
            console.log("No existe la opcion");
            break;
    }

}

