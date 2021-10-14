import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 14/10/2021
 * GitHub: JanCRM
 * Función: Salario trabajador.
 */
/**
 * Funcion que devuelve si un numero es primo o no
 * @param numeroDeHoras y precioHora, es lo que pasaremos por parametros para saber el salario.
 * @returns number. Esta funcion devuelve el salario mensual de un trabajador.
 */

//Devuelve el salario mensaual antes de impuestos
function salario(numeroDeHoras:number, precioHoras:number):number{
   let  salario=0;
   if(numeroDeHoras>40 && numeroDeHoras<45){
     salario=precioHoras*40;
     salario+=(1.5*precioHoras*(numeroDeHoras-40));
   }else if(numeroDeHoras>45){
     salario=precioHoras*40;
     salario+=(1.5*precioHoras*(numeroDeHoras-40));
     salario+=(2*precioHoras*(numeroDeHoras-45));
   }
   else {
     salario=numeroDeHoras*precioHoras;
   }
   salario=4*salario;
   return salario;
}
//calcula el descuento de los impuestos de acuerdo al salario mensual.
function salarioImpuestos(num:number):number{
  let salario=num;
  if(salario<1000){
    salario=salario*0.90;
  }else {
    salario=salario*0.85;
  }
  return salario;
}
export default {salario, salarioImpuestos}
