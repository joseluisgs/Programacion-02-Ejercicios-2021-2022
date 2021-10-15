/**
 * Autor: Mohamed Asidah Bchiri
 * Ejercicio 1: Sumar los n primeros numeros
 */

package com.MAsidah;

import java.util.Scanner;

public class Main {

    /**
     * Suma desde 1 hasta numero y devuelve el resultado
     * @param numero : numero hasta el que hay que sumar
     * @return suma : la suma de 1 a numero
     */
    public static int sumaNumeros(int numero){
        int suma = 0;
        for(int i = 1; i <= numero; i++){
            suma += i;
        }
        return suma;
    }

    /**
     * Hace lo mismo, pero sin recurrir a bucles
     * Si a alguien le interesa la demostracion:
     * https://es.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯#/media/Archivo:Animated_proof_for_the_formula_giving_the_sum_of_the_first_integers_1+2+...+n.gif
     * @param numero
     * @return suma : el resultado de sumer de 1 a numero
     */
    public static int sumaInfinita(int numero){
        int suma = (numero * (numero +1))/2;
        return suma;
    }
    public static void main(String[] args) {
        int numero = 0;
        int suma = 0;
        Scanner in = new Scanner(System.in);
        do {
            System.out.println("Introduce un numero: ");
            numero = in.nextInt();
        }while(numero < 0);

        suma = sumaNumeros(numero);
        System.out.println("La suma desde 1 hasta  "+ numero+ " es " + suma);

        suma = sumaInfinita(numero);
        System.out.println("La suma desde 1 hasta  "+ numero+ " usando la formula es " + suma );
    }
}
