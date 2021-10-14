export default {esNumeroPrimo};

/**
 * Función que calcula si un número es primo o no.
 * @param numero El número del que se desea saber si es primo o no.
 * @returns Verdadero si es primo, falso si no.
 */
function esNumeroPrimo (numero : number) : boolean {
    let esPrimo : boolean = false; 

    if ((numero%2 == 0) && (numero!=2)){
        esPrimo = false;

    }else{
        esPrimo = true; 
    }

    for (let i = 2; (esPrimo == true) && (i < numero); i++){
        if(numero%i == 0){
            esPrimo = false;
        }else{
            esPrimo = true;
        }
    }

    return esPrimo;
}

