import chalk from 'chalk';
import read from 'readline-sync';


/**
 * Funcion que devuelve el resultado de las cartas
 * @param playingCard Nos dice si quiere o no quiere carta para jugar y sus operaciones
 * @returns el resultado
 */

function canPlayingCard() {
//Variables de la funcion

let playingCard: string;
let numberCard: number;
let resultCard: number = 0;
//Inicio
    do{
        playingCard = read.question("Quieres carta (s/n): "); 
        if(playingCard == ('s' || 'S')){      
        numberCard = Math.trunc(Math.random()*10+1);

//Ya que los números --> 8, 9 y 10 cuentan como medio punto y el resto como un punto hacemos un switch
     switch(numberCard){
        case 8:
            resultCard = resultCard + 0.5;
        break;

        case 9:
            resultCard = resultCard + 0.5;
        break;
        
        case 10:
            resultCard = resultCard + 0.5;
        break;

        default:
            resultCard = resultCard + 1;
        break;
     }
    }  
    
    console.log("Llevas un total de: " ,chalk.cyan(+ resultCard)); 
    }while(playingCard == ('s' || 'S'));
    return resultCard;
}


/**
 * Funcion que devuelve el dinero dependiendo de si ha ganado o perdido la apuesta 
 * @param resultCard Nos dice si ha ganado el juego o no
 * @returns el dinero que hay por haber ganado o perdido 
 */
function isWinner(resultCard:number, moneyUser:number, betUser:number) {
//Inicio
    if(resultCard<=7.5){
        console.log(chalk.greenBright("Has ganado"));
        moneyUser = moneyUser + betUser;
    }else {
        console.log(chalk.redBright("Has perdido"));
        moneyUser = moneyUser - betUser
    }
   return moneyUser;
}


/**
 * Funcion que devuelve si sigue jugando el jugador  
 * @param tryAgainUser Nos dice si quiere volver a jugar y si puede con el dinero que le queda
 * @returns si puede seguir jugando
 */
function canTryAgain(moneyUser:number){
    let tryAgainUser: string;
    tryAgainUser = read.question(chalk.yellowBright("Quiere volver a jugar(s/n): "));
    if (tryAgainUser == ('s' || 'S') && moneyUser == 0 ){
        console.log(chalk.red("No puedes volver a jugar ya que tu saldo es 0 :("));
    }
    return tryAgainUser
}

//Exportar funciones y procedimientos
export default{canPlayingCard, isWinner, canTryAgain}