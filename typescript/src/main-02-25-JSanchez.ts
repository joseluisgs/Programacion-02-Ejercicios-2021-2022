// Zona de declaración de librerías y módulos propios o del sistema
import read from "readline-sync";


/**
 * Autor: Jorge Sánchez Berrocoso
 * Dia: 16/10/2021
 * Función: Calcular la media de los numero introducidos por consola.
 */



//Calcular la media de los numero introducidos por consola
let contador : number =0;
let valor;
let suma=0;
let media;


/**En este ejercicio vamos a utilizar una bucle hacer mientras, 
*este es un bucle indefinido, y como condicion le he ducho que mientras 
*el valor introducido sea mayor a 0 me siga preguntando, una vez terminemos nois dara la media
*y la cantidad de numeros introducidos.
*/
do{
    contador++;
    valor=read.questionInt("Ingresa el valor");
    suma=suma+valor;
}while(valor>0)

media=suma/(contador - 1);
console.log("La media es: "+media);
console.log("La cantidad de numero introducidos es: "+(contador-1));