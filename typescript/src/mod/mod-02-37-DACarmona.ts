/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Módulo de continuar.
 */
import read from 'readline-sync';

/**
 * Funcion que devuelve V/F
 * @param mensaje el mensaje a mostrar
 * @returns es true si continuamos, false si no.
 */

function confirmacion(mensaje: string): boolean {

   // La función confirmacion, se le puede añadir un mensaje, el cual luego se le añadira el (s/n) diciendole que es lo que tiene que introducir.
   let opcion = read.question(mensaje + " (s/n): ");
   let continuar = false;

   // Si el dato introducido es s o S, continuar sera true. Sino continuar sera false.
   if (opcion == "s" || opcion == "S") {
      continuar = true;
      
   }else{
      continuar = false;
   }

   // El dato que devolvera sera o continuar true o false.
   return continuar;

}

export default (confirmacion);