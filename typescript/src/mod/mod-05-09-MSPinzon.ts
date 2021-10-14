export default {numeroCifras};

/**
 * Función que calcula el número de cifras de un número.
 * @param numero El número del que hay que hallar el número de cifras.
 * @returns El número de cifras que tiene.
 */
function numeroCifras (numero : number) : number{
    let contadorCifras : number = 0;
    
    while(Math.floor(numero)!=0){
        numero = numero/10;
        contadorCifras++;
    }
    return contadorCifras;
    
} 