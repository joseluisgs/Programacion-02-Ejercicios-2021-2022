/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Modulo calculo numeros primos
 */

function primeNumberCalculation(num: number): boolean {
    //Numeros primos, devuelve boolean.
    let isPrime: boolean = true;

    let counter = 2;
    while ((isPrime) && (counter != num)) {
        if (num % counter == 0) {
            isPrime = false;
            counter++;
        }
    }
    return isPrime
}

export default { primeNumberCalculation }