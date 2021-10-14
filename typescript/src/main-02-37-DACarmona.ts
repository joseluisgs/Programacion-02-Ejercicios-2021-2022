/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Juego del número secreto, advinar el número generado aleatoriamente por el equipo, en 5 intentos y hasta 100.
 */
// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import confirmacion from './mod/mod-02-37-DACarmona';

// Programa Número secreto.
// Zona de declaración de variables y constantes
let nSecreto: number;
let intento: number;
let num: number;
let continuar: boolean;
let acertado= false, boolean;

/**
 * Se cra un dowhile que abarcara todo el programa por si queremos seguir jugando una vez perdido o acertado.
 */
// Entrada de texto
do {
   // Se genera un numero secreto entre 1-100, el resultado sera truncado. Y asiganamos intentos con 5 y acertado en false.
   nSecreto = Math.floor(Math.random() * 100 + 1);
   intento = 5;
   acertado = false;
   
   /**
    * A continuación volveremos a crear otro bucle dowhile, para que se repitan los intentos pero no que vuelva a generar otro número.
    * Cada vez que se repita el bucle, se ira restando 1 a la variable de intento.
    */
   do {
      intento = intento - 1;
      
      // Pediremos al usuario que diga un número entre 1 y 100, si no se encuentra entre esos valores, repetiremos la  pregunta hasta que este.
      do {
         num = read.questionInt("Dime un número del 1 - 100: ");
         
      } while (num < 1 || num > 100);
      
      // Si el número que ha dado es igual al número secreto, habrá acertado y se saldra del bucle.
      if (num == nSecreto) {
         console.log(chalk.bold.green("Has acertado"));
         acertado= true;
         
      } else {
         /**
          * Si no ha acertado, entrara en otra condición donde el programa le dira si el número secreto
          * es mayor o menor del número que ha dado el usuario. 
          */
         if (num > nSecreto) {
            console.log(chalk.bold.yellow("El número secreto es menor."));
            
         } else {
            console.log(chalk.bold.blue("El número secreto es mayor."));
            
         }
         
      }
      /**
       * El bucle se repetira mientras intento sea mayor que cero y acertado sea false.
       * Si inteto llega a 0 sale del juego o si acertado es igual a true.
       */
   } while (intento > 0 && acertado == false );

   // Si ya no quedan más intentos y no has aceratado, te dira que no puedes seguir jugando.
   if(intento == 0 && acertado == false){
      console.log(chalk.bold.red("Ya no te quedan más intentos. Has perdido."))

   }

   // A continuación preguntaremos si quiere volver a jugar o no. Esta parte esta hecha con una función modular.
   continuar = confirmacion("¿Quieres continuar? ")
   
} while (continuar == true);

// Si continuar es false, es decir no, saldremos del juego.
console.log("Gracias por jugar")
