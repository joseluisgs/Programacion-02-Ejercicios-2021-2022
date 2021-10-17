// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-02-33-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que nos da un numero aleatorio de la primitiva.
 */
 
function randomEntre() {
  let numero_primitiva = "";
  for (let i = 0; i <= 5; i++) {
    numero_primitiva = (numero_primitiva + aux.randomEntre(1,49) .toString() .padStart(2, "0"));
  }
  console.log(numero_primitiva);
}

function main() {
  randomEntre();
}

main();

