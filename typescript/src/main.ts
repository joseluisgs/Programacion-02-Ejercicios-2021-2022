/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Juego 7 y media 
 */

 import read from 'readline-sync'
 import mod from "./mod/mod_7_y_Media_JJAylon";
 
 //Declaración de variables
 
 let initialMoney: number = 10; //(Podria ser const ya que lo asignamos antes de correr el programa y no se modifia)
 let money: number;
 money = initialMoney;
 let bet = 0;
 let keepPlay: boolean = true;
 let sum = 0;
 let cardStorer;
 let wantMore: boolean = true;
 let bankSum: number = 0;
 
 //Inicio del programa
 while (keepPlay && money > 0) {
     
     console.log("Tienes " + money + " euros, ¿Quieres jugar?")
     keepPlay = read.keyInYNStrict(" ");
     if (keepPlay) {
 
         sum = 0;
         bankSum = 0;
         wantMore = true;
 
         do {
             //Funcion de apuesta
             bet = read.questionFloat("¿Cuanto dinero quieres apostar? ")
         } while (bet > money)
         //Obtencion y printado de la carta inicial
         cardStorer = mod.randomCardGenerator();
         console.log("Tu carta es: " + mod.cardToPlayer(cardStorer));
         sum = sum + mod.cardToGame(cardStorer);
 
         while (wantMore && sum <= 7.5) {
             //Funcion para otorgar cartas al jugador y suma de sus valores
             console.log("Quieres más cartas? ");
             wantMore = read.keyInYNStrict("");
             if (wantMore) {
                 cardStorer = mod.randomCardGenerator();
                 console.log("Tu carta es: " + mod.cardToPlayer(cardStorer));
                 sum = sum + mod.cardToGame(cardStorer);
             }
         }
         //Valoración de condiciones de victoria y gestion de apuesta
         if (sum > 7.5) {
             console.log("Has superado los 7.5, has perdido " + bet + " euros");
             money = money - bet;
         } else {
             console.log("Tu jugada es de: " + sum)
 
             while (sum > bankSum && bankSum <= 7.5) {
                 cardStorer = mod.randomCardGenerator();
                 bankSum = bankSum + mod.cardToGame(cardStorer);
                 console.log("La banca roba carta y recibe un: " + mod.cardToPlayer(cardStorer));
 
             }
             if (sum > bankSum || bankSum > 7.5) {
                 console.log("Tu jugada es de: " + sum);
                 console.log("La de la banca es de: " + bankSum);
                 console.log("Has ganado " + bet + " euros");
                 money = money + bet;
 
             } else if (sum <= bankSum) {
 
                 console.log("Tu jugada es de: " + sum);
                 console.log("La de la banca es de: " + bankSum);
                 console.log("Has perdido " + bet + " euros");
                 money = money - bet;
             }
         }
     }
 }
 //Valoración de ganancias o perdidas
 console.log("El juego ha terminado");
 console.log("Has acabado con: " + money);
 if (money > initialMoney) {
     console.log("Tu ganancia es de: " + (money - initialMoney));
 } else {
     console.log("Tu perdida es de: " + (initialMoney - money));
 }