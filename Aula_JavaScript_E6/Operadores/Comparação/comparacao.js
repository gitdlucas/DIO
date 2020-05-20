//Igual
//Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
var teste = 3;
var teste2 = "3";

if (teste == teste2) {
    console.log(true);
} else {
    console.log(false);
}

//Não Igual
//Retorna verdadeiro caso os operandos não sejam iguais. 3 != var1
var teste = 2;
var teste2 = "3";

if (teste != teste2) {
    console.log(true);
} else {
    console.log(false);
}

//Estritamente igual (===)
//Retorna verdadeiro caso os operadores sejam iguais e do mesmo tipo. Vide Object.is e igualdade
var teste = 2;
var teste2 = "2";

if (teste === teste2) {
    console.log(true);
} else {
    console.log(false);
}

//Estritamente Não Igual (===)
//Retorna verdadeiro caso os operadores não sejam iguais e do mesmo tipo.
var teste = 2;
var teste2 = "2";

if (teste !== teste2) {
    console.log(true);
} else {
    console.log(false);
}

//Maior que
var teste = 4;
var teste2 = 3;

if (teste > teste2) {
    console.log(true)
} else {
    console.log(false);
}

//Maior ou Igual que...
var teste = 4;
var teste2 = 3;

if (teste >= teste2) {
    console.log(true)
} else {
    console.log(false);
}

//Menor que
var teste = 4;
var teste2 = 3;

if (teste < teste2) {
    console.log(true)
} else {
    console.log(false);
}

//Menor ou Igual que...
var teste = 4;
var teste2 = 3;

if (teste <= teste2) {
    console.log(true)
} else {
    console.log(false);
}