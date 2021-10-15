/**
 * Funcion que devuelve los numeros primos que hay entre 1 y 100.
 * @param numero Numero para saber si es primo.
 * @returns es primo o no.
 */

function esPrimo(numero: number) {
 
    let esPrimo = numero > 1;
    if (esPrimo) {
       
        let otroDivisor = false;
        let i = 2;
        while (!otroDivisor && i < numero) {
            let resto = numero%i;
            otroDivisor = resto == 0;
            if (otroDivisor) {
            }
            i++;
        }
        esPrimo = !otroDivisor;
    } else {
    }
    return esPrimo;
}
export default {esPrimo};