/**
 * Funcion que nos devulve el perimetro de un cuadrado.
 * @param lado Numero para calcular el perimetro y la superficie del cuadrado.
 * @returns devolvemos el valor del perimetro del cuadrado.
 */

 function esPerimetro(lado: number) {
    let perimetro:number
    perimetro= lado+lado+lado+lado;
  
     return perimetro;
 }
 
 /**
  * Funcion que devuelve la superficie de un cuadrado.
  * @param lado Numero para calcular el perimetro y la superficie del cuadrado.
  * @returns devolvemos el valor de la superficie del cuadrado.
  */
 function esSuperficie(lado:number) {
     let superficie:number
     superficie= lado*lado;
     return superficie;
 }
 
 export default {esPerimetro,esSuperficie}