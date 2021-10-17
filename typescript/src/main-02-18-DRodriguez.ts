// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Programa que calcula el precio de un billete.
 */


// Zona de declaraciones
let distanciaDestino: number;
let diasEstancia: number;
let precioBillete: number;
let precioKilometro: number;

//Inicio del programa:
distanciaDestino= read.questionInt("¿A cuánta distancia está el destino?")
diasEstancia= read.questionInt("¿Cuántos días va a estar?")

//Desarrollo del programa;

if(distanciaDestino > 800 && diasEstancia >7){   
}
    precioBillete= (distanciaDestino*1.75)
if(distanciaDestino <800 && diasEstancia <7){

}
    precioBillete=(distanciaDestino*2.5)

//Imprimir resultado:
console.log("El precio del billete es: " + precioBillete )

