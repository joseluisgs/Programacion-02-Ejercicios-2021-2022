import read from 'readline-sync';
import chalk from 'chalk';




/**
 * @author Azahara blanco
 * @description calcula el area de un circulo
 * da un numero :number
 * usado en el ejercicio 05-03-Ablanco
 */
function superficieCirculo(radio:number) {

    let area : number =(radio*radio)*3.14
    return area
}


/**
 * @author Azahara blanco
 * @description calcula el area de un Circulo
 * da un numero :number
 * usado en el ejercicio 05-02-Ablanco
 */
function perimetroCirculo(radio:number){

    let perimetro : number = 2*3.14*radio
    return perimetro
}


/**
 * @authorcreado por azahara
 * @descriptiondice si un numero es par o no
 * devuelve un booleano
 * usado en el ejercicio 05-03-Ablanco
 */
function numeroEsPar (numero:number ) {
    
    let respuesta : boolean;

    if (numero%2==0) {
       
        respuesta = true
    } else {
         respuesta =false
    }
return respuesta
}

/**
 * @uthor  realizado por azahara
 * @description procedimiento que da una respuesta
 * @emits no devuelve nada, solo escrive por pantalla
 * usada en el ejercicio 05-03-Ablanco
 */
function escriveSiEsPar(esPar: boolean , numeroAnalizado:number) {
   
    if (esPar==true) {
    
        console.log("tu numero  "+numeroAnalizado+" es par")
    } else {
        console.log("tu numero  "+numeroAnalizado+" no es par")
    }
}


/**
 * @author azahara
 * @description debuelve un boleano por si quieres salir o no
 * ejercicio 05-03-Ablanco
 * 
 */
function quiereSair() {
    let lecturaSiNo: string =read.question("quieres salir S/N")
    let opcionSiSalir : boolean = false
    
    opcionSiSalir=lecturaSiNo == "s"
    

    return opcionSiSalir
    }

/**
 * @author Azahara Blanco 15-10-2021
 * @description comprueva si un numero que pide es positivo y distinto a 0
 * @devuelve un numero positivo
 * usada en el ejercicio (05-04)
 */

function pedirNumeroPositivo(){

    let numeroAnalizado : number
  do {
    numeroAnalizado = read.questionInt("Dime tu numero positivo: ")
  } while (numeroAnalizado<1);  
 

    return numeroAnalizado
}


/**
 * @author Azahara Blanco 15-10-2021
 * @description calcula la reiz cuadrada de un numero
 * @devuelve un numero number
 * usada en el ejercicio (05-04)
 */

function raizCuadrada(numeroAnalizado:number){

    let numeroResultado: number = Math.sqrt(numeroAnalizado)

    return numeroResultado
}



//para devolver las funciones

 export default { superficieCirculo, perimetroCirculo, 
    numeroEsPar, escriveSiEsPar, quiereSair,pedirNumeroPositivo, raizCuadrada ,}