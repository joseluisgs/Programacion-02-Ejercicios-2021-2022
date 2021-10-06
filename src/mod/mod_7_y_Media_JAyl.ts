function randomCardGenerator() {

    return Math.trunc(Math.random()*10 +1);

}

function cardToPlayer(card:number):string{

    if(card == 8) {
        return "J"; 
    } else if (card == 9){
        return "Q";
    } else if (card == 10){
        return "K";
    } else {
        return card.toString()
    }
}

function cardToGame(card:number){
    
    if(card >= 8) {
        return 0.5;
    } else {
        return card;
    }
}

export default {randomCardGenerator, cardToGame, cardToPlayer}