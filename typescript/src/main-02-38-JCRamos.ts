import read from 'readline-sync';
import chalk from 'chalk';
import operaciones from '../mod-02-operadores-factorial-esprimo-JCRamos';

/**
 * Autor: Jan Carlos Ramos Martínez
 * GitHub: JanCRM
 * Dia: 11/10/2021
 * Función: Menu para seleccionar los diferentes ejercicios.
 * 
 * Funcion que realiza operaciones aritmeticas.
 * @returns El facctorial de una numero, y comprar si un numero es primo.
 */


//Declaracion de variables
let menu:string;
let continuar:boolean;
do{
    //Lectura de los datos. 
    console.log("¿Que ejercicio deseas realizar?");
    console.log("Ejercicio 23, marque[1]");
    console.log("Ejercicio 29, marque[2]");
    console.log("Ejercicio 31, marque[3]");
    menu=read.question();

    switch(menu){
        case '1':
            let num=0;
            let fact=operaciones.factorial(num);
            console.log(chalk.green.bold("El factorial del numero introducido es: "+fact));
        break;
        
        case '2':
            let continuar: boolean = true;
            let aprobados:number = 0;
            let suspensos:number = 0;
            let suficientes:number = 0;
            let bienes:number = 0;
            let notables:number = 0;
            let sobresalientes:number = 0;
            let alumnos: number = 0;
            let media: number = 0;
            let nota: number = 0;
            let notas: number = 0;
            do{
                    // Debemos ciclar porque la nota debe ser entre 0 y 10
                do {
                    nota = read.questionInt('Introduce la nota del alumno: ');
                } while (nota < 0 || nota > 10);

                // el número de alumnos aumenta, las nota total tambien y las medias
                alumnos += 1; 
                notas = notas + nota;
                media = notas / alumnos;

                if (nota >= 0 && nota < 5) {
                    suspensos += 1;
                } else if (nota >= 5 && nota < 6) {
                    aprobados += 1;
                    suficientes += 1;
                } else if (nota >= 6 && nota < 7) {
                    aprobados += 1;
                    bienes += 1;
                } else if (nota >= 7 && nota < 9) {
                    aprobados += 1;
                    notables += 1;
                } else if (nota >= 9 && nota <= 10) {
                    aprobados += 1;
                    sobresalientes += 1;
                }
            // Menú de opciones
            console.log(chalk.blue('¿Quieres salir? (s/n)'));
            let salir = read.question();
            if (salir == 's' || salir == 'S') {
                continuar = false;
            } else {
                continuar = true;
            }
        } while (continuar);

            // Mostramos las estadisticas
        console.log(chalk.blue('Estadisticas:'));
        console.log('Alumnos: ' + alumnos);
        console.log('Nota Media: ' + media.toFixed(2)); // Solo sacamos la media con dos decimales
        console.log(chalk.green('Aprobados: ' + aprobados));
        console.log(chalk.red('Suspensos: ' + suspensos));
        console.log(chalk.yellow('Suficientes: ' + suficientes));
        console.log(chalk.magenta('Bienes: ' + bienes));
        console.log(chalk.cyan('Notables: ' + notables));
        console.log(chalk.greenBright('Sobresalientes: ' + sobresalientes));
        break;
        case '3':
            let esPrimo:boolean;
            console.log("Comprobar si un numero es primo o no.");
            let numP=read.questionInt("Introduce el numero que deseas comprobar: ");
            esPrimo=operaciones.esPrimo(numP);
            if(esPrimo){
                console.log(chalk.green.bold("El numero introducido es primo."));
            }else{
                console.log(chalk.red.bold("El numero introducido no es primo."));
            }
        break;
        default:
            console.log(chalk.red.bold("Ha marcado una opcione que no se encuentras en el men."));
            break;
    }
//Llamada a la funcion que le pregunta al usuario si desea continuar o salir.
continuar=operaciones.continuar(chalk.blue.bold("Desea salir del programa "));
}while(continuar)

console.log(chalk.yellow.bold("Fin del programa"));




