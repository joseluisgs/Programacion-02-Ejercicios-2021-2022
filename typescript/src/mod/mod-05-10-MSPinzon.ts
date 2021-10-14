export default {calcularSalario};

/**
 * Función que calcula el salario diario de una persona dependiendo del número de horas trabajadas y el horaio en el que ha trabajado.
 * @param horasDiurno Número de horas trabajadas en horario diurno.
 * @param horasNocturno Número de horas trabajados en horario nocturno.
 * @param esDomingo Verdadero si el día en el que se calcula el salario es domingo, si no falso.
 * @returns El salario ganado ese día.
 */
function calcularSalario (horasDiurno : number, horasNocturno : number, esDomingo : boolean): number{
    let gananciaDia : number;
    let gananciaNoche : number;
    let gananciaTotal : number = 0;

    if(esDomingo == false){
        gananciaDia = horasDiurno * 20;
        gananciaNoche = horasNocturno * 35;
        gananciaTotal =  gananciaDia + gananciaNoche;

    }else if(esDomingo == true){
        gananciaDia = horasNocturno * 30;
        gananciaNoche = horasNocturno * 50;
        gananciaTotal =  gananciaDia + gananciaNoche;
    }

    return gananciaTotal;
}