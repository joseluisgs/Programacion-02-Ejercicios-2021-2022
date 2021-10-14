export default { calcularSuperficie, calcularPerimetro };

/**
 * Función que calcula la superficie de un cuadrado.
 * @param ladoCuadrado pedido por teclado.
 * @returns Superficie del cuadrado.
 */
function calcularSuperficie (ladoCuadrado : number): number{
    let resultadoSuperficie : number;
    resultadoSuperficie = ladoCuadrado * ladoCuadrado;
    return resultadoSuperficie;
}

/**
 * Función que calcula el perímetro de un cuadrado.
 * @param Lado pedido por teclado.
 * @returns Perímetro del cuadrado.
 */
function calcularPerimetro(ladoCuadrado : number): number{
    let resultadoPerimetro : number;
    resultadoPerimetro = ladoCuadrado * 4;
    return resultadoPerimetro;
}

