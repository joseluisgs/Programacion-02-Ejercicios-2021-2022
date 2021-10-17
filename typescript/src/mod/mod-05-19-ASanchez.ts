//Importación de las librerías.
import read from 'readline-sync'
import chalk from 'chalk'

//Paso a la función.
function calculateAge(birthDay: number, birthMonth: number, actualDay: number, actualMonth: number, birthYear: number, actualYear: number) {
    
    //Declaración de variables.
    let age: number=0;

    //Introducimos las condiciones para que, dependiendo del mes y día de nacimiento, determina tu edad real.
    if (birthMonth > actualMonth) {
        age = actualYear - birthYear -1;
    } else if (birthMonth == actualMonth) {
         if (birthDay < actualDay) {
            age = actualYear - birthYear;
        } else {
            age = actualYear - birthYear -1; 
         } 
    } else if (birthMonth < actualMonth) {
        age = actualYear - birthYear;
    }    

    //Imprime por pantalla la solución.
    console.log("Tienes " + chalk.red(age) + " años.");
}

//Exportamos la función para llevarla a nuestro main.ts
export default { calculateAge }