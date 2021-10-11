/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Modulo calculo numeros primos
 */

function primeNumberCalculation(num: number): boolean {
    //Numeros primos, devuelve boolean.
    let isPrime: boolean = true;
    for (let i = 3; i < Math.sqrt(num) && isPrime; i += 2)
        if (num % i == 0) {
            isPrime = false;
        }
    return isPrime
}

export default { primeNumberCalculation }