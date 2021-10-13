import read from 'readline-sync';
import chalk from 'chalk';

//Variables

let numeroApuesta : number
let numeroResultado : number
let totalResultado : string = "- "
let totalApuesta : string = "- "
let ganadas : number = 0

// Inicio

for(let  i=0; i<15; i++){

    //para sacar n apuesta 
    numeroApuesta = Math.trunc(Math.random()*3)
    
    //para que en vez de 3 salga X
    switch (numeroApuesta) {
        case 1:
            totalApuesta += "1 "
            break;
        case 2 :
            totalApuesta += "2 "
        default:
            totalApuesta += "X "
            break;

