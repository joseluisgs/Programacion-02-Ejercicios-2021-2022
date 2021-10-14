/**
 * Funcion que devuelve el area 
 * @param num Numero para saber su area
 * @returns numero de area
 */

function esArea(num:number) {
    //Variables
    let area: number;
    const NUMERO_PI: number = 3.14;

    //Inicio
    area = NUMERO_PI*num**2;
    return area;
}

/**
 * Funcion que devuelve el area 
 * @param num Numero para saber su circunferencia
 * @returns numero de circunferencia
 */

function esCircunferencia(num:number) {
    //Variables
    let circunferencia: number;
    const NUMERO_PI: number = 3.14;

    //Inicio
    circunferencia = 2*NUMERO_PI*num;
    return circunferencia;
}

  // Exportamos las funciones que queramos que sea publicas
  export default { esArea, esCircunferencia };