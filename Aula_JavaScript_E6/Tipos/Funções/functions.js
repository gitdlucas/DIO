// Declaração padrão de função
function fn() {
    return 'Code Here';
}

// Implementação do ES6 - Arrow Function
const arrowfn = () => 'Code Here'; // Sem return explícito

const arrowfn2 = () => {
    //Mais de uma expressão
    return 'Code Here'; // Tem que exibir o return
}

//Funções também são objetos
fn.prop = "Posso criar propriedades!";

console.log(fn());
console.log(fn.prop);

//Receber Parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);