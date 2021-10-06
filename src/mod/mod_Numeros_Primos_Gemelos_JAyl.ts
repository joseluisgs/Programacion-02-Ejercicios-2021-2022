//Numeros primos, devuelve boolean.

function primeNumberCalculation(num: number): boolean {

    let isPrime: boolean = true;

    let counter = 2;
    while ((isPrime) && (counter != num)) {
        if (num % counter == 0){
            isPrime = false;
            counter++;
        }
    }
    return isPrime
}

export default {primeNumberCalculation}