// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from '../mod/mod-game-7-50-RPalao'

/**
 * Nombre: Rocío Palao Fernández
 * GitHub: Rochiio
 * Fecha: 14/10/2021
 * Descripción: Juego de las siete y media
 */

//Variables
let money: number = 100;
let bet: number;
let card: string;
let result: number;
let tryAgain: string;



//INICIO

do {
    //Presentación
        console.log(chalk.blueBright("Juego de las siete y media"));
        console.log(chalk.bgBlackBright("Tiene un total de dinero: " ,chalk.greenBright(+money)));

    //Apuesta
        bet = read.questionInt("Cuanto dinero quieres apostar en esta partida: ");

    //Modular proceso cartas
        result = aux.canPlayingCard();

    //Funcion winner or loser

        money = aux.isWinner(result, money, bet)

        console.log("Tu dinero restante es: " + money);

    //Seguir jugando
        tryAgain = aux.canTryAgain(money)

}while(tryAgain == ('s' || 'S') && money > 0 );


