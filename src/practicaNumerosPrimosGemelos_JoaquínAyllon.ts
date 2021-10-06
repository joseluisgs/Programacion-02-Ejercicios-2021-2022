import mod from "./mod";

let limitNumber: number = 10000;

for (let i: number = 2; i <= limitNumber; i++) {

    if (mod.primeNumberCalculation(i) && mod.primeNumberCalculation(i + 2)){
        process.stdout.write("(" + i + ", " + (i + 2) + ")");
    }
}