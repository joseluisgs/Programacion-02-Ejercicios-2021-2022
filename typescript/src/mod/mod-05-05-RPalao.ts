import chalk from 'chalk';
/**
 * Funcion que devuelve el area 
 * @param anio Numero para saber si el año es bisiesto o no
 * @returns si el año es bisiesto
 */

function esBisiesto (anio:number) {
    //Inicio
    if(anio%400==0) {
        console.log(chalk.gray("El año: " + anio + " es bisiesto "));
    }else if((anio%4==0) && (anio%100)!=0) {
        console.log(chalk.gray("El año: " + anio + " es bisiesto "));
    }else {
        console.log(chalk.red("El año: " + anio + " no es bisiesto "));
    }
}

export default {esBisiesto};