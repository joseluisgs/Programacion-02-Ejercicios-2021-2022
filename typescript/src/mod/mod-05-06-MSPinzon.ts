export default {tieneDecimales};

/**
 * Función que comprueba si un número tiene decimales.
 * @param numero Número que se comprueba si tiene decimales.
 * @returns Verdadero si tiene decimales, falso si no.
 */
 function tieneDecimales (numero: number): boolean {
    let esDecimal : boolean = true;

   if (numero - Math.trunc(numero)!= 0){
        esDecimal = true;

    }else{
        esDecimal = false;
    }
     return esDecimal;
     


}
