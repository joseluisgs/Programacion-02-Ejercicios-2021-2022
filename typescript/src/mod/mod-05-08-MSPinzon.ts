export default {estanOrdenados};

/**
 * Función que comprueba si tres números pedidos por teclado están ordenados de menor a mayor.
 * @param numero1 Primer número.
 * @param numero2 Segundo número.
 * @param numero3 Tercer número.
 * @returns Verdadero si están ordenados de menor a mayor, falso si no.
 */

 function estanOrdenados (numero1: number, numero2: number, numero3: number):boolean{
    let sonCrecientes : boolean = false;
    
    if((numero1<numero2) && (numero2<numero3)){
        sonCrecientes = true;
    }else{
        sonCrecientes = false;
    } 

    return sonCrecientes;
}