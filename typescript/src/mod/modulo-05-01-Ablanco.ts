import read from 'readline-sync';
import chalk from 'chalk';




/**
 * @author Azahara blanco
 * @description calcula el area de un cuadrado
 * da un numero :number
 */
function superficieCuadrado(lado:number) {

    let area : number =lado*2
    return area
}


/**
 * @author Azahara blanco
 * @description calcula el area de un cuadrado
 * da un numero :number
 */
function perimetroCuadrado(lado:number){

    let perimetro : number = lado*4
    return perimetro
}



 export default { superficieCuadrado, perimetroCuadrado}