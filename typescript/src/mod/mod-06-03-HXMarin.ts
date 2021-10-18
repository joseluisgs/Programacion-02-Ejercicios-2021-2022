import read from 'readline-sync';
import chalk from 'chalk'
/*Calcular el salario de un trabajador a la semana, en donde necesitamos el numero de horas semanales y el precio de cada hora. 
Si ha trabajado mas de 40 horas a la semana el salario de cada hora es un incremento a 1.5 veces a la hora normal.*/
function job() {
    //Declaracion de Variables:
    let numberOfHours: number;
    let hourPrize: number;
    let money: number = 0;
    //Inicio del Programa:
    numberOfHours = read.questionFloat("Dime las horas trabajadas de la semana: ");
    hourPrize = read.questionFloat("Dime el Salario por hora: ");
    if (numberOfHours > 40) {
        money = numberOfHours * (hourPrize * 1.5);
        console.log("Su salario semanal es de: " + money+ "€");
    } else {
        money = numberOfHours * hourPrize;
        console.log("Su salario semanal es de: " + money+ "€");
    }
    return job;
}
export default {job};