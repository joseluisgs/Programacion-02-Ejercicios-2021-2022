import read from 'readline-sync';

let a: number = 0;
let b: number = 0;
let c: number = 0;
let discriminant: number = 0;
let solution1: number = 0;
let solution2: number = 0;

a = read.questionFloat("ax^2 + bx + c = 0: a= ")
b = read.questionFloat("ax^2 + bx + c = 0: b= ")
c = read.questionFloat("ax^2 + bx + c = 0: c= ")

discriminant = ((b^2) - (4*a*c));

if(discriminant > 0){
    solution1 = ((-b + Math.sqrt(discriminant))/(2*a))
    solution2 = ((-b - Math.sqrt(discriminant))/(2*a))
    console.log("Tus soluciones son x= " + solution1+", "+ solution2)
} else if(discriminant > 0) {
    console.log("No tiene soluciones")
} else {
    solution1 = (-b/(2*a))
    console.log("Tu solucion es x= " + solution1)
}