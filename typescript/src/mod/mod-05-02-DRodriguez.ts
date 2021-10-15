/**
 * Funcion que nos devulve el perimetro de un cuadrado.
 * @param radio radio para calcular la circunferencia y la superficie del circulo.
 * @returns devolvemos el valor del area del circulo.
 */
const NUMERO_PI= 3.14
 function esCircunferencia(radio: number) {
    let circunferencia:number
    circunferencia= 2*(radio**2);
  
     return circunferencia;
 }
 
 /**
  * Funcion que devuelve la superficie de un cuadrado.
  * @param radio radio para calcular la circunferencia y la superficie del circulo.
  * @returns devolvemos el valor de la circunferencia del circulo.
  */
 function esArea(radio:number) {
     let area:number
     area= NUMERO_PI*(radio**2);
     return area;
 }
 
 export default {esCircunferencia,esArea}