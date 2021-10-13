/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Modulo Juego 7 y media
 */

function randomCardGenerator() {
    //Generador de una carta aleatoria en baraja española
    return Math.trunc(Math.random() * 10 + 1);

}

function cardToPlayer(card: number): string {
    //Transformacion de la carta para ser reconocida por el jugador

    let cardName:string;

    if (card == 8) {
        cardName = "Sota";
    } else if (card == 9) {
        cardName = "Caballo";
    } else if (card == 10) {
        cardName = "Rey";
    } else {
        cardName = card.toString();
    }

    return cardName;
}

function cardToGame(card: number) {
    //Tansformación de la carta para ser reconocido su valor para la suma

    let cardValue:number; 

    if (card >= 8) {
        cardValue = 0.5;
    } else {
        cardValue = card;
    }

    return cardValue
}
//Exportación de funciones
export default { randomCardGenerator, cardToGame, cardToPlayer }