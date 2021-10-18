import read from 'readline-sync';
import chalk from 'chalk'

function evenAndOddNumbers(){
//Declaracion de Variables:
let number: number;
let x;
let even:number=0;
let odd:number=0;
//Inicio del Programa:
number = read.questionInt("Dime el numero: ");
for (let i = 0; i < number.toString().length; i++) {
    x = (number.toString().charAt(i))
    if (Number(x)% 2 == 0) {
        even++
    } else {
        odd++
    }
}
console.log("Digitos Pares: "+even);
console.log("Digitos Impares: " +odd);
return evenAndOddNumbers;
}

export default {evenAndOddNumbers}