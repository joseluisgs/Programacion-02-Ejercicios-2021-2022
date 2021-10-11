import read from 'readline-sync';
import chalk from 'chalk';
import calculadora from '../mod-02-operadores-factorial-esprimo-JCRamos';


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


let a,b:number;
let operador:string;
let continuar:boolean;

do{
    //leectura de el tipo de operacion que se desea realizar,
    //y de operador
    console.log("¿Qué operacion deseas realizar?");
    operador=read.question();
    a=read.questionInt("Introduce el valor de a: ");
    b=read.questionInt("Introduce el valor de b: ");
        
    //segun el tipo de operador que elijas se relizara una determinada operacion. 
        switch(operador){
            case '+':
                let suma;
                suma=calculadora.suma(a,b);
                console.log("El resultado de la suma es: "+suma);
            break;
            case '-':
                let resta;
                resta=calculadora.resta(a,b);
                console.log("El resultado de la resta es: "+resta);
            break;
            case '*':
                let multiplicacion;
                multiplicacion=calculadora.multiplicacion(a,b);
                console.log("El resultado de la suma es: "+multiplicacion);
            break;
            case '/':
                if(a<=0 || b<=0){
                    console.log("La operacion no se puede realizar, ya que uno de los numero es 0.");
                }else{
                    let division;
                    division=calculadora.division(a,b);
                    console.log("El resultado de la suma es: "+division);
                }
                
            break;
            default:
                console.log("El operador no es correcto.");
            break;
        }
    

    //Llamada a la funcion que le pregunta al usuario si desea continuar o salir.
    continuar=calculadora.continuar(chalk.blue.bold("Desea salir de la calculadora"));
}while(continuar)

console.log(chalk.red.bold("Fin del programa"));