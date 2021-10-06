import read from 'readline-sync';

let num : number = 0;

num = read.questionInt('Dime un numero = ');

if(num < 0){
    console.log("Tu numero es negativo, no se puede hacer la operación")
} else {
    console.log("la raiz cuadrada de tu numero es: " + Math.sqrt(num))
}