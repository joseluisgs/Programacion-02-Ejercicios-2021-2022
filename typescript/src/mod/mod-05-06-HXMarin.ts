import read from 'readline-sync';
import chalk from 'chalk'

function decimales() {
    //Declaración de Variables:
    let number: number;

    //Inicio del Programa:
    number = read.questionFloat("Dime un Numero: ");
    if (number %1 !=0) {
        console.log("Tu numero NO decimal.");
    } else {
        console.log("Tu numero SI decimal");
    }
    return decimales;
}
export default{decimales}