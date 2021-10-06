import read from 'readline-sync';

let num : number = 0;

num = read.questionFloat('Dime un numero = ');

if(num == Math.trunc(num)){
    console.log("Tu numero no tiene decimales")
} else {
    console.log("Tu numero tiene decimales")
}