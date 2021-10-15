/**
 * Funcion para devolver un numero aleatorio.
 * @param a numero inicial.
 * @param b numero final.
 * @returns numero aleatorio truncado.
 */

function randomEntre(a:number,b:number) {
    let rand = Math.random();
    return Math.trunc(rand*b + a);
}

export default {randomEntre};