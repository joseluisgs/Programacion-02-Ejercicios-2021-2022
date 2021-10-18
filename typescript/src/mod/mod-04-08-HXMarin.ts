import read from 'readline-sync';
import chalk from 'chalk'

function years() {
    //Declaración de Variables:S
    let month: string;
    let year: number;
    let isLeapYear: boolean;
    //Inicio del Programa:
    year = read.questionInt("Dime El Año a saber si es Bisiesto: ");
    month = read.question("Dime el mes en específico: ");
    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
        isLeapYear = true;
        console.log("El Año Si es Bisiesto");
    } else {
        console.log("El Año No es Bisiesto")
    }
    switch (month) {
        case "enero":
            console.log("El mes Enero tiene 31 días.");
            break;
        case "febrero":
            if (isLeapYear = true) {
                console.log("El mes de Febrero tiene 29 días.");
            } else {
                console.log("El mes de febrero tiene 28 días");
            }
            break;
        case "marzo":
            console.log("El mes de Marzo tiene 31 días");
            break;
        case "abril":
            console.log("El mes de abril tiene 30 días");
            break;
        case "mayo":
            console.log("El mes de Mayo tiene 31 días");
            break;
        case "junio":
            console.log("El mes de Junio tiene 30 días");
            break;
        case "julio":
            console.log("El mes de Julio tiene 31 días");
            break;
        case "agosto":
            console.log("El mes de Agosto tiene 31 días");
            break;
        case "septiembre":
            console.log("El mes de Septiembre tiene 30 días");
            break;
        case "octubre":
            console.log("El mes de Octubre tiene 31 días");
            break;
        case "noviembre":
            console.log("El mes de Noviembre tiene 30 días");
            break;
        case "diciembre":
            console.log("El mes de Deciembre tiene 31 días");
            break;
    }
}
 
export default {years};
