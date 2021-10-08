/**
 * Nombre: Joaquín Ayllón
 * GitHub: JoaquinAyG
 * Fecha: 08/10/2021
 * Descripción: Calculo numeros primos gemelos
 */
import mod from "./mod/mod_Numeros_Primos_Gemelos_JJAylon";

let limitNumber: number = 10000;

for (let i: number = 2; i <= limitNumber; i++) {
    //Función para determianr números primos gemelos
    if (mod.primeNumberCalculation(i) && mod.primeNumberCalculation(i + 2)){
        process.stdout.write("(" + i + ", " + (i + 2) + ")");
    }
}