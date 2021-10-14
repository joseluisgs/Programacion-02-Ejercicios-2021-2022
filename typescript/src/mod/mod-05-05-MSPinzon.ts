export default {añoBisiesto};

/**
 * Función que permite verificar si un año es bisiesto.
 * @param año Año del que se quiere saber si es bisiesto o no.
 * @param esBisiesto Variable lógica que empieza siendo falsa y se convierte en verdadera si el año es bisiesto oo no.
 * @returns Devuleve verdadero si el año es bisiesto, falso si no.
 */
 function añoBisiesto (año : number, esBisiesto: boolean): boolean{
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        esBisiesto = true;
    } else {
        esBisiesto = false;
    }
    return esBisiesto;
}