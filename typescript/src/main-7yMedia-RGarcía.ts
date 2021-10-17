/**
 * Nombre: Rubén García-Redondo Marín
 * GitHub: RuyMi
 * Fecha: 15/10/2021
 * Descripción: El Juego de las 7 y media
 */


// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import modulo from './mod/mod-7yMedia-RGarcía';


// Zona de declaración de variables y constantes

let sumaCartas: number;
let numeroAleatorio: number;
let dinero = 100;
let sigueJugando = false;
let dineroApostado: number

// Zona de instrucciones

do{
    sumaCartas = 0;
    console.log("¿Cuánto dinero quieres apostar?");
    dineroApostado = read.questionInt();

    // Primero comprobamos que la apuesta no es mayor al dinero que tiene y que tampoco apueste dinero negativo.

    while(dineroApostado > dinero || dineroApostado <= 0){
        if(dineroApostado > dinero){
        console.log("No puedes apostar mas dinero del que tienes, por favor, introduzca otra cantidad: ");
        dineroApostado = read.questionInt();
        }else if(dineroApostado <= 0){
            console.log("No puedes apostar 0€ o una cantidad negativa, por favor, introduzca otra cantidad :");
            dineroApostado = read.questionInt();
        }

    }
    
    console.log("Empezaremos con la apuesta de: " + dineroApostado + "€");
   do{

    // Generamos un número aleatorio.
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Comprobamos que número es y se lo sumamos a la variable suma.
    switch(numeroAleatorio){
        case 1:
            sumaCartas = sumaCartas + 1;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 2:
            sumaCartas = sumaCartas + 2;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 3:
            sumaCartas = sumaCartas + 3;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 4:
            sumaCartas = sumaCartas + 4;
            console.log("La suma es de: " + sumaCartas)
            break;
        case 5:
            sumaCartas = sumaCartas + 5;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 6:
            sumaCartas = sumaCartas + 6;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 7:
            sumaCartas = sumaCartas + 7;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 8:
            sumaCartas = sumaCartas + 0.5;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 9:
            sumaCartas = sumaCartas + 0.5;
            console.log("La suma es de: " + sumaCartas);
            break;
        case 10:
            sumaCartas = sumaCartas + 0.5;
            console.log("La suma es de: " + sumaCartas);
            break;
    }

    /* Comprobamos si la suma es menor, igual o mayor a 7.5.
       En caso de que pierda, se le restará la apuesta al dinero.
       En caso de que gane, se le sumará la apuesta al dinero.
       Y, en caso de que no llegue a 7.5 y no quiera seguir jugando, recuperará solo la mitad de su apuesta.
    */ 
    if(sumaCartas > 7.5){
        console.log("Superó 7.5, por lo tanto, ha perdido " + dineroApostado);
        dinero = dinero - dineroApostado;
        sigueJugando = false;
    }else if(sumaCartas < 7.5){
        dinero = dinero - (dineroApostado/2);
        console.log("¿Quieres coger otra carta? (Si/No)");
        sigueJugando = modulo.menuContinuar();
    }else if(sumaCartas == 7.5){
        console.log("Llegaste a " + sumaCartas + ". ¡Enhorabuena!");
        dinero = dinero + dineroApostado;
        sigueJugando = false;
    }

   }while(sigueJugando);
   //Por último, se comprueba si tiene dinero, y si tiene, se le pregunta al usuario si quiere seguir jugando.

   if(dinero <= 0){
       console.log("Te quedaste sin dinero");
       sigueJugando = false;
   }else{
       console.log("Su saldo es de " + dinero);
       console.log("¿Quieres jugar de nuevo? (Si/No)");
       sigueJugando  = modulo.menuContinuar();
   }


}while(sigueJugando)




