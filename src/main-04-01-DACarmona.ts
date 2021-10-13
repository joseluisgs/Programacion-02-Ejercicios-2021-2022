/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Suma de los n primeros números primos.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from "./mod/mod-04-01-DACarmona";

//Programa Suma Primos
// Zona de declaración de variables y constantes
let limite: number = 0;
let suma: number = 0;

/**
 * Pediremos al usuario que nos indique hasta que número va a querer que se sume.
 * Si el número dado es menor que 0, es decir un número negativo, no servira y volvera a pedir un limite.
 */
do {
  limite = read.questionInt(chalk.yellow('Dime un número: '));
} while (limite <= 0);

// Haremos un bucle que se repetira hasta que llegue al limite dado, se ira incrementando 1 cada repetición.
for (let num = 2; num <= limite; num++) {
  
  /**
   * Se utiliza una condicion con un módulo que nos dira si el número es primo o no.
   * Si el número es primo, se guardara en suma y se ira sumando todos los numeros que sean primos.
   */
  if (aux.esPrimo(num)) {
    suma += num;
  }
}

// Una vez llegado al limite dado, nos dara un mensaje diciendonos el total de la suma de los numeros pares hasta el limite.
//Salida
console.log(chalk.green("El resultado de la suma de los números primos entre 1 y " + limite + " es: " + suma));
