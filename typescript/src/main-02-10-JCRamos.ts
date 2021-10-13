// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: conversor de grados  centigrados a farenheit.
 */

//converson de temperatura
//Declaracion de variables
let conversion;
let f;
let c;

//Creacion del menu
console.log("A que desea convertir: Fahrenheit [1] Celsius[2]");
conversion=read.questionInt();


//creacion del segun, para seleccionar en que sentido queremos realizar la conversion.
switch(conversion){
    
    case 1:
    //convierte de grados celsius a Farenheit.
        c=read.questionInt("Intro los grados Celsius: ");
        f=((9/5)*c)+32;
        console.log((chalk.blue.bold("La temperatura en grados Farenheit es: "+f)));
        break;
    case 2:
    //convierte de grados Farenheit a celsius.
        f=read.questionInt("Intro los grados Fahrenheit: ");
        c=((f-32)*5)/9;
        console.log((chalk.yellow.bold("La temperatura en grados Farenheit es: "+c)));
        break;
        default:
            {
                console.log((chalk.red.bold("La opcion introducida no es correcta.")));
            }
}





