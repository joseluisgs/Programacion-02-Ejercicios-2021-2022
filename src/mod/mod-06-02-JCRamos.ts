import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 14/10/2021
 * GitHub: JanCRM
 * Función: seleccionada si quieres imprimir par o impar.
 */


function numParImpar(num:string){
  if(num=='par'){
    for (let i=0; i<1000; i++){
      if (i%2==0){
        process.stdout.write(chalk.blue.bold(+i+", "));
      }
    }
  }else if(num=='impar'){
    for (let i=0; i<1000; i++){
      if (i%2!=0){
        process.stdout.write(chalk.green.bold(+i+ ", "));
      }
    }
  }

}
export default {numParImpar}
