import read from 'readline-sync';
import chalk from 'chalk';

//Variables

let n1 : number;
let n2 : number;
let operacion : string;
let continuar: string;

// inicio

do{
    n1 = read.questionInt("dime tu numero 1")
    n2 = read.questionInt("dime tu numero 2")
    operacion = read.question("dime que operación quieres realizar con estos números")
    switch (operacion) {
        case '+':
            console.log(n1+n2)
            break;

         case '-':
            console.log(n1-n2)
            break;

        case 'x':
            console.log(n1*n2)
            break;

        case '/':

            if(0==n1 || 0== n2){
                console.log("no es posible esa operación porque contiene un 0")
            }else{
                console.log(n1/n2)
            }

            break;
        default: 

            console.log("no es posible esa operación porque se reconoce el simbolo de operacion")
            break;
    }

    continuar = read.question("quieres continuar S / N")

}while(continuar=='s' && 'S')

console.log("fin de programa")
