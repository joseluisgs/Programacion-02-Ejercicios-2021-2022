import read from 'readline-sync';

let condition : boolean = false
let fahrenheit : number
let celsius : number

condition = read.keyInYNStrict("¿Quieres que sea en farenheit? ")

if(condition == true){
    do{
        fahrenheit = read.questionFloat("Dime la temperatura : ")
    } while (fahrenheit < (-459.67))
    
    celsius = (fahrenheit - 32) * 5 / 9
    console.log("Tu temperatura en fahrenheit es = " + fahrenheit)
    console.log("Tu temperatura en celsius es = " + celsius)
} else {
    condition = read.keyInYNStrict("¿Entonces lo quieres en celsius? ")
    if (condition == true) {
        do{
            celsius = read.questionFloat("Dime la temperatura : ")
        } while (celsius < (-273.15))
               
        fahrenheit = (celsius * 9 / 5) + 32 
        console.log("Tu temperatura en fahrenheit es = " + fahrenheit)
        console.log("Tu temperatura en celsius es = " + celsius)
    } else {
        console.log("Pues si no quieres nada paso")
    }
}