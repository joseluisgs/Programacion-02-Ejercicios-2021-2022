import read from 'readline-sync';

let num : number = 0;

num = read.questionInt('Dime un numero = ');

if(num < 0){
    console.log("Tu numero es negativo")
} else {
    console.log("Tu numero es positivo")
}