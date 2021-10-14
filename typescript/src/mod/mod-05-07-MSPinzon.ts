export default {conversionGradosCentigrados, conversionFarenheit};

/**
 * Función que convierte de grados Centígrados a Farenheit
 * @param temperaturaEnGrados Temperatura en Centígrados.
 * @returns La temperatura en Farenheit.
 */
 function conversionGradosCentigrados (temperaturaEnGrados : number): number{
    let resultadoEnFarenheit = (temperaturaEnGrados * (9/5)) + 32;
    return resultadoEnFarenheit;
}

/**
 * Función que convierte de Farenheit a grados Centígrados;
 * @param temperaturaEnFarenheit Temperatura en Farenheit.
 * @returns La temperatura en Centígrados.
 */
function conversionFarenheit (temperaturaEnFarenheit : number): number{
    let resultadoEnGradosCentígrados = (temperaturaEnFarenheit - 32) * (5/9);
    return resultadoEnGradosCentígrados;
    
}