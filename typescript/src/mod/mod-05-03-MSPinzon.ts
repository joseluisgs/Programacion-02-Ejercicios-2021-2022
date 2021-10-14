export default {esNumeroPositivo};

/**
 * Función que determina el signo del número
 * @param numero Número del que se determina el signo.
 * @returns True si es positivo, false si no.
 */
function esNumeroPositivo (numero: number): boolean{
    let esPositivo : boolean = true;

    if(numero < 0){
        esPositivo = false;
    }
    
    return esPositivo;
}