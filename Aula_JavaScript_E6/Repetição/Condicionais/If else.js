/*
if (condição){
    //Codigo
}

*/
//Identificar se um valor dentro de um array é par ou ímpar
const array = [0, 1, 2, 3, 5, 6, 7, 8];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é PAR!`);
    } else {
        console.log(`O número ${item} é IMPAR!`);
    }
})

console.log('\n-----------------------------------------------------------------')
console.log('\n')


//identificar se um número é divisível por 2,3 ou 5

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2!`);
    }
    if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3!`);
    }
    if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5!`);
    }
});