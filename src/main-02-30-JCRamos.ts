import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * GitHub: JanCRM
 * Dia: 09/10/2021
 * Función: Indica cual es mayor de una serie de numeros introducidos por teclado.
 * 
*/



//Variables
let nroMayor;
let num;
let cant:number;

//Voy a utilizar una secuencial para este ejercicio que es el 30.
//Algoritmo que permite una cantidad definidad de numeros y devuelve el mayor de todos.
//Version con la cantidad definida.
/*cant=read.questionInt("Introduce la cantida de numero que quiera: ");

for(let i=0; i<cant; i++){

    num=read.questionInt("Introduzca un valor "+i+": ");
    if(num>=nroMayor){
        nroMayor=num;
    }
}
console.log("El numero mayor es: "+nroMayor);*/

//Version con un bucle indefinido.

let num2=0;
let nroMayor2=0;
let continuar=true;


do{    
    num2=read.questionInt("Introduce tantos numero como quieras y se ira imprimiendo el mayor: ");
    if(num2>=nroMayor2){
        nroMayor2=num2;
        
    }
    console.log("El numero mayor es: "+nroMayor2);
    
    /*console.log("Desea salir (si/no):" );
    let salir=read.question();
    if(salir=="si"){
        continuar=false;
    }else{
        continuar=true
    }*/
}while(continuar)