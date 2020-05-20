/*

for ([ExpressãoIncial];[Condição];[Incremento]);
declaração

*/

const array = ["um", "dois", "três", "quatro"];

for (let index = 0; index < array.length; index++) {
    const elemento = array[index];
    console.log(`Elemento #${index}: ${elemento}`);
}