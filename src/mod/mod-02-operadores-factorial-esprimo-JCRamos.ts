import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * GitHub: JanCRM
 * Dia: 11/10/2021
 * Función: Calculadora.
 * 
 * Funcion que realiza operaciones aritmeticas.
 * @param a, b, operador.
 * @returns el resultado de la operacion.
 */



function suma(a:number, b:number):number{
    let suma;
    suma=a+b;
    return suma;
}
function resta (a:number, b:number):number{
    let resta   ;
    resta=a-b;
    return resta;
}
function multiplicacion (a:number, b:number):number{
    let multiplicacion;
    multiplicacion=a*b;
    return multiplicacion;
}
function division (a:number, b:number):number{
    let division   ;
    division=a/b;
    return division;
}
function continuar(mensaje: string): boolean {
    let opcion = read.question(mensaje + ' (s/n): ');
    let continuar = false;
    if (opcion == 's' || opcion == 'S')
      continuar = false;
    else
      continuar = true;
    // Devolvemos porque somos una funcion
    return continuar;
  }
  function factorial(num:number){
    let fact;
    //Entrada de datos.
    num=read.questionInt("Introduce el numero del que quieres saber el factorial: ");
    fact=1;
    //la variable i la igualo al numero introducido por teclado, 
    //de esta forma podemos restar uno en cada iteracion, luego acumulamos en una variable
    //la multiplicacion del numero con el siguiente que es menor.
    for(let i=num; i>1; --i){
        fact*=i;
        
    }
    return fact;
}
function esPrimo(num: number): boolean {
  let esPrimo = true;
  let contador = 2;
  while ((esPrimo) && (contador != num)) {
    if (num % contador == 0)
      esPrimo = false;
    contador++;
  }
  return esPrimo;
}

// Exportamos las funciones que queramos que sea publicas

export default{suma, resta, multiplicacion, division, factorial, continuar, esPrimo}