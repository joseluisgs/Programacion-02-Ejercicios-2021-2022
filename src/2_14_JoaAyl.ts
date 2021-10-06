import read from 'readline-sync';

let num: number = 0;
let count: number =0;

do{
    num = read.questionInt("Dime un número de como mucho cinco cifras: ")
} while (Math.abs(num) >= 100000)

while (Math.abs(num)>1){
    num = num/10;
    count++;
}
console.log("Tu numero tiene "+count+" cifras")