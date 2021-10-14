/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Módulo si es primo o no.
 */

/**
 * Funcion que devuelve si un numero es primo o no
 * @param num Numero para saber si es primo
 * @returns Verdadero si es primo
 */

// Si el numero introducido al dividirlo entre 2, el resto es 0,  el numero no es primo.
 function esPrimo(num: number): boolean {
   let esPrimo = true;
   let contador = 2;
   while ((esPrimo) && (contador != num)) {
     if (num % contador == 0)
       esPrimo = false;
     contador++;
   }
   // Devolvera si el numero es primo es true, si no es false.
   return esPrimo;
 }
 
 // Exportamos las funciones que queramos que sea publicas
 export default { esPrimo };