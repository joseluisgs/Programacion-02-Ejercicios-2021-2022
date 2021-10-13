/**
 * Funcion que devuelve el area 
 * @param num Numero para saber la raiz cuadrada
 * @returns la raiz cuadrada
 */

function esRaiz(num:number) {
    //Variables
        let resultado: number;

    //Inicio
        if(num>=0) {        
        resultado =  Math.sqrt(num);
        console.log("El resultado es " + resultado);

        }else {
            console.log("No se puede hacer la raiz de numeros negativos, porfavor escriba otro numero");
        }
}

export default {esRaiz};