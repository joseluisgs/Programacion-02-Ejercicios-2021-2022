/**
 * Nombre: Daniel Carmona
 * GitHub: Kassius10
 * Fecha: 10/10/2021
 * Descripción: Módulo que suma los primos hasta el limite que establezca.
 */

/** 
 * Funcion que nos devuelve el total de la suma de los numeros primos hasta el limite.
 * @param num Es el numero hasta donde queremos que cuente y realice la suma
 * @returns Devuelve el total de la suma de primos.
 */
function sumaPares(dato: number){
   let numT= 0;
   
   // Haremos un bucle que primero tendra que saber que número es par, si es par se almacenara en numT y se iran sumando.
   // El bucle seguira hasta que ya no sea menor o igual que el dato que se introduzca. 
   for (let num = 0; num <= dato; num++) {
      if (num % 2 == 0) {
         numT = numT + num;
      }

   }

   // Devuelve el total de la suma.
   return numT;

}
export default(sumaPares)