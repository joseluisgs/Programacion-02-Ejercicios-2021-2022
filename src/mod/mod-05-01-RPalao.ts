
/**
 * Funcion que devuelve el perimetro 
 * @param num Numero para saber su perimetro
 * @returns numero de perimetro
 */
 function esPerimetro(lado: number) {
    //Variables
    let perimetro: number;
   
    //Inicio
    perimetro = lado+lado+lado+lado;

    return perimetro;
 }
  

/**
 * Funcion que devuelve la superficie
 * @param num Numero para saber su superficie
 * @returns numero de superficie
 */
 function esSuperficie(lado: number) {
    //Variables
    let superficie: number;
   
    //Inicio
    superficie = lado*lado;

    return superficie;
 }


  // Exportamos las funciones que queramos que sea publicas
  export default { esPerimetro, esSuperficie };