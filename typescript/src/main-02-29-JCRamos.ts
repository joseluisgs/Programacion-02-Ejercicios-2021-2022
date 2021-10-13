// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';



/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 09/10/2021
 * Función: Calcula la media de N alumnos introducidos por teclado
 * 
*/

// Zona de declaracion de variables
let continuar: boolean = true;
let aprobados = 0;
let suspensos = 0;
let suficientes = 0;
let bienes = 0;
let notables = 0;
let sobresalientes = 0;
// Tambien lo puedo hacer así, que me gusta más
let alumnos: number = 0;
let media: number = 0;
let nota: number = 0;
let notas: number = 0;

// Lo primero es crea un menú que nos diga si queremos salir o parar de introducir datos
do {

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
