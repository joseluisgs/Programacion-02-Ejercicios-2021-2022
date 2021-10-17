/**
 * Nombre: Francisco Toribio Respaldo
 * GitHub: frantoribio
 * Fecha: 09/10/2021
 * Descripción: Ejercicio 02-31. Módulo que calcula si un número es primo
 */


/**
 * Funcion que devuelve si un numero es primo o no
 * @param numero Numero para saber si es primo
 * @returns Verdadero si es primo
 */
 function esPrimo(numero: number): boolean { 
  let esPrimo = true;
  let contador = 2;
  while ((esPrimo) && (contador != numero)) {
      if (numero % contador == 0)
      esPrimo = false;
      contador++;
      }
  return esPrimo;
}

function presentacion(): void {
  console.log("Usando librería de números primos");
}

// Exportamos las funciones que queramos que sea publicas
export default { esPrimo, presentacion };
