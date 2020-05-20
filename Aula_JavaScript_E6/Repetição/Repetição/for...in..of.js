let arr = [3, 4, 5];
arr.atributo = 'Oi';

//Exibe no console.log o valor do índice + atributo
for (let i in arr) {
    console.log(i);
}

//Exibe somente valor do array
for (let i of arr) {
    console.log(i);
}