import read from 'readline-sync';
import chalk from 'chalk'
/**
 * Autor: Héctor Xavier Marín
 * Día: 11/10/21
 * Función: Este ejercicio te elabora una media de notas a partir de los resultados que se dan por teclado, una vez puesta una nota negativa.
 * Resolución: esprimo = true || false
 */
export function colegio(){
//Declaración de Variables:
    let aprobados = 0 ;
    let suspensos = 0 ;
    let notas = 0;
    let alumnos = 0;  
    let notasTotal = 0;  
//Inicio del programa:
for (let i = 0; ; i++, alumnos ++){
    notas = read.questionInt("Dime la nota:");
    if(notas>=0 && notas<=4){
        console.log("Estás suspenso:");
        suspensos++;
    } else if(notas==5){
        console.log("Estás aprobado con un suficiente");
        aprobados++;
    } else if (notas==6){
        console.log ("Estás aprobado con un Bien");
        aprobados++;
    } else if (notas>=7 && notas <= 8){
        console.log ("Estás aprobado con un Notable");
        aprobados++;
    } else if (notas>=9 && notas<=10){
        console.log ("Estás aprobado con un Sobresaliente");
        aprobados++;
    }else if (notas<0)
    break;
        notasTotal= notasTotal+notas;
    }
    notasTotal= notasTotal/alumnos;
    console.log("Alumnos Aprobados: " +aprobados+  " Alumnos Suspensos: " +suspensos+ " Nota Media: " +notasTotal);
return colegio;
}
