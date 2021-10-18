import read from 'readline-sync';
import chalk from 'chalk'

function numerosPares(){
    //Declaracion de Variables:
    let isPair: boolean;
    //Inicio del Programa: 
    isPair = read.keyInYNStrict("¿Quieres Numeros Pares?");
    if (isPair == true) {
        for (let i = 1; i <= 1000; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 1; i <= 1000; i += 2) {
            console.log(i);
        }
    }
return numerosPares;
}

export default{numerosPares};