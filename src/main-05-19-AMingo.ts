import read from 'readline-sync';
import meses from './mod-05-19';

let año : number;
let diaNa : number;
let añoNA : number;
let diaAc : number;
let mesAc : number;
let dias : number;
let añoAc : number;
let diaMes : number;
let diaTot : number;
let añoEdad : number;
let diaNaTot : number;
let diasCasiFaltan : number;


diaNa = read.questionInt ('dia nacimiento');
mesNa = read.questionInt ('mes nacimiento en numeros, ejemplo: enero es 01');
añoNa = read.questionInt ('año nacimiento');
diaAc = read.questionInt ('dia actual');
mesAc = read.questionInt ('mes actual en numeros, ejemplo: enero es 01');
añoAc = read.questionInt ('año actual');

for (año = añoNa+1 , año<=añoAc ) {
dias= dias + 365;
}
diasNaTot = meses.mesCalculo(mesNa);
diasCasiFaltan = meses.mesCalculo(mesAc);
diaTot = diaNaTotal-diaNa+diaAc-diasCasiFaltan+dias;
añoEdad = Math.trunc(diaTot/365);
console.log("tu edad es"+añoEdad);
