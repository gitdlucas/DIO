// In
Algo in aquitemAlgo;

//Array
var arvores = ["acácia", "laranjeira", "cedro", "eucalipto"]
0 in arvores // Retorna true porque existe o índice 0;
6 in arvores // Retorna false porque temos apenas 4 elementos no array, logo não há elemento de numero de índice 6
    "cedro" // retorna false, deve-se informar o numero do índice desse elemento do array
lenght // retorna true, pois lenght é uma propriedade dos arrays

//Objetos Pré-definidos
    "PI" in Math; // Retorna true
var minhaString = new String("coral");
"lenght" in minhaString //Retorna true

//Objetos Personalizados
var meuCarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meuCarro; //Retorna true
"modelo" in meuCarro; //Retorna true

//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //Code here
}