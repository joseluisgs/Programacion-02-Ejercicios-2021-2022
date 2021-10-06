import { O_TRUNC } from 'constants';
import read from 'readline-sync';

let num1 : number = 0;
let num2 : number = 0;
let num3 : number = 0;
let media : number =0;

num1 = read.questionInt('Primer numero = ');
num2 = read.questionInt('Segundo numero = ');
num3 = read.questionInt('Tercer numero = ');
media = (num1+num2+num3)/3;

console.log("La media es = " + media);
console.log("Y truncada es = " + Math.trunc(media));