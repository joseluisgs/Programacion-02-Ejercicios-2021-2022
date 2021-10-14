export default {calcularFactorial};

/**
 * Función que calcula el factorial de un número.
 * @param numero Número del que se desea calcular el factorial.
 * @returns El factorial del número.
 */

function calcularFactorial (numero : number) : number {
    let factorial : number = 1;
    
    for(let i = 1; i <= numero; i++){
        factorial = factorial * i;
    }
    return factorial;
}