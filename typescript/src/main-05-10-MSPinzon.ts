/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 08/10/2021
 * Descripción : Ejercicio que calula el salario dependiendo de si es domingo, del número de horas que se ha trabajado y en el horario que se ha trabajado.
 */
import read from "readline-sync";
import salario from "./mod-05-10-MSPinzon";

let horasDiurno : number;
let horasNocturno : number;
let eleccionUsuario: string;
let esDomingo : boolean = false;

console.log ("Si es domingo hoy pulse S si no pulse N.")
eleccionUsuario= read.question();
if ((eleccionUsuario == "S")||(eleccionUsuario == "s")){
    esDomingo = true;
}else if ((eleccionUsuario == "N")||(eleccionUsuario == "n")){
    esDomingo = false;
}

console.log("¿Cuántas horas ha trabajado hoy en horario diurno?");
horasDiurno = read.questionInt();

console.log("¿Cuántas horas ha trabajado hoy en horario nocturno?");
horasNocturno = read.questionInt();

console.log("Su salario de hoy es igual a " + salario.calcularSalario(horasDiurno, horasNocturno, esDomingo));
