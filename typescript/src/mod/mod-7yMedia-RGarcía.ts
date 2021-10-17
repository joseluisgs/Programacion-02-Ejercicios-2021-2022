/**
 * Nombre: Rubén García-Redondo Marín
 * GitHub: RuyMi
 * Fecha: 15/10/2021
 * Descripción: Módulo del juego de las 7 y media
 */


import read from 'readline-sync';

/**
 * 
 * @returns Verdadero si quiere continuar
 */

function menuContinuar (): boolean{
  let opcion: string;
  let continuar: boolean
  opcion = read.question()  
  if(opcion == 'Si'){  
    continuar = true; 
  }else{ 
    continuar = false;; 
  }
  return continuar;
} 


export default {menuContinuar};
