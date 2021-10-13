import read from 'readline-sync';
import chalk from 'chalk';
import mates from  './modulo-05-01-Ablanco'

//variables

let lado : number;
let superficie: number;
let perimetro: number;

// Inicio

//pedir dato de lado
lado=read.questionInt("dime tu lado   ")

// calcular superficie
superficie=mates.superficieCuadrado(lado)

//calcular area
perimetro=mates.perimetroCuadrado(lado)

//leer datos obtenidos

console.log("cuadrado tiene  "+perimetro+" de perimetro y una superficie de  "+superficie)

//fin