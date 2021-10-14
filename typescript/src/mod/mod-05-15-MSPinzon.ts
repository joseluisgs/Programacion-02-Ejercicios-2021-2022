export default {divisionRestasSucesivas};

/**
 * Función que averigua el cocinete y el resto d euna división mediante restas sucesivas.
 * @param dividendo El dividendo de la división.
 * @param divisor El disvisor de la división.
 * @returns El resto de la división (se obtiene a traves de la parte que no se puede seguir restando del dividendo).
 */
function divisionRestasSucesivas(dividendo : number, divisor : number) : number {
    let contadorCocienteDivision : number = 0;

    while(dividendo >= divisor){
        dividendo = dividendo - divisor;
        contadorCocienteDivision++;
    }
    console.log('El cociente de la división es ' + contadorCocienteDivision);
    return dividendo;
    
}