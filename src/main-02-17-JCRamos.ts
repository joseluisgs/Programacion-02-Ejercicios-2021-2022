// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Resuelve una ecuacion de segundo grado.
 * 
 */


//Declaracion de variables
let a;
let b;
let c;
let solucion1=0;
let solucion2=0;



//para resolver este problena un condicional doble

a=read.questionInt("Introduce el valor de a: ");
b=read.questionInt("Introduce el valor de b: ");
c=read.questionInt("Introduce el valor de c: ");

//en esta condicion determina si el valor de a es diferented e 0.
//Luego entra a resolver la ecuacion.
if(a!=0){

    solucion1=(-b+(Math.sqrt(b*b)-(4*a*c))/(2/a));
    console.log("Si el valor de b es positivo, el resultado de X1 es: "+solucion1);

    solucion2=(-b-(Math.sqrt(b*b)-(4*a*c)/(2/a)));
    console.log("Si el valor de b es negativo, el resultado de X2 es: "+solucion2);
    
} else{
    console.log((chalk.red.bold("El valor de a es menor a 0, esto ya seria una ecuacion de primer grado....")));
}
