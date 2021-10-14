/**
 * Nombre : Mireya Sánchez Pinzón.
 * Github : Mireyasanche
 * Fecha : 13/10/2021
 * Descripción : Ejercicio que muestrar los números primos que hay del 1 al 100.
 */
import read from 'readline-sync';
import primo from './mod-05-13-MSPinzon';

for(let i = 1; i <= 100; i++){    
    if(primo.esNumeroPrimo(i) == true){
        console.log(i);
    }
}
