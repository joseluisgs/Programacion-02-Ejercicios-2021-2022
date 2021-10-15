// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Calculamos notas de alumnos.
 */


// Zona de declaraciones:
let notas=0;
let aprobados=0;
let suspensos=0;
let alumnos=0;
let notasTotales=0;

//Desarrollo del programa;    

for(let i=0;;i++,alumnos++){
  notas= read.questionFloat("Dime la nota: ");
  if(notas>=0 && notas<=4.99){
    console.log("La nota introducida se contabiliza como suspensa")
    suspensos++
  } else if(notas>=5 && notas<=5.99){
    console.log("La nota es aprobada con un suficiente")
    aprobados++
  } else if(notas>=6 && notas<=6.99){
    console.log("La nota introducida es un bien")
    aprobados++
  } else if (notas>=7 && notas<=8){
    console.log("La nota es un notable")
    aprobados++
  } else if(notas>=9 && notas<=10){
    console.log("La nota es un sobresaliente")
    aprobados++
  } else if(notas<0){
    notasTotales=notasTotales+notas;

  }  

  
}
  notasTotales=notasTotales/alumnos;
  console.log("Alumnos aprobados: " +aprobados);
  console.log("Alumnos suspensos: " +suspensos);
  console.log("La nota media de la clase es de : "+ notasTotales);





