//Permitir atributos privados dentro de objetos

const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log("symbol1 é igual a symbl2 =", symbol1 === symbol2);

//Prevenir o conflito entre nome de propriedades, ou seja, sem subscrever o valor da variável!
const nameSymbol1 = Symbol("nome");
const nameSymbol2 = Symbol("nome");

const user = {
    [nameSymbol1]: "Luciana",
    [nameSymbol2]: "Bernardo",
    lastname: "Zandonai"
}

console.log(user);

//Symbols criam propriedades que não enumerables

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log('\nO valor da chave ${key} : ${user:[key]}')
    }
}


//Exibir os symbols de um objeto
console.log('\nSymbols registrados no objeto user : ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades de um objeto
console.log("Todas as propriedades do objeto user:", Reflect.ownKeys(user));

//criar um enum

const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}