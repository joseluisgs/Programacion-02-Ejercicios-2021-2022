// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { sign } from 'crypto';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: algoritmo que muestra la hora incrementada en un segundo.
 * 
 */


//Declaracion de variables
let h;
let m;
let s;
let cont=1;


//Lectura de datos
h=read.questionInt("Introduce la hora ");
m=read.questionInt("Introduce los minutos ");
s=read.questionInt("Introduce los segundos ");


/*he utilizamos un condicional anidado, antes 
de entar en el if le sumo uno a los segundos
*/
s=s+1;
if(s==60){
    s=0;
    m=m+1;
    if(m==60){
        m=0;
        h=h+1;
        if(h==24){
            h=0;
        }
    }

}

/*he hecho el mismo ejercicio con bucle miestras, 
me ha parecido que funcionan igual.
*/
/*while(s==60){
    s=0;
    m=m+1;
    while(m==60){
        m=0;
        h=h+1;
        while(h==24){
            h=0;
        }
    }
}*/

console.log(h+" : "+m+" : "+s);
