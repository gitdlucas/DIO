const MeuNumero = 12.9065;
console.log(MeuNumero);

//Transformar numero para string
const NumeroParaString = MeuNumero.toString();
console.log("\nO número:", NumeroParaString, ". Agora é do tipo: ", typeof NumeroParaString);

//Fixa a quantidade de casas decimais
const FixarCasaDecimais = MeuNumero.toFixed(2);
console.log("\nA quantidade de casas decimais foi fixada em 2, agora a variável, tem valor: ", FixarCasaDecimais);

//String parseada para float
console.log("\nString Parseada para Float : ", typeof parseFloat(NumeroParaString), parseFloat(NumeroParaString));

//String para Inteiro
console.log("\nString Parseada para Integer: ", typeof parseInt(NumeroParaString), parseInt(NumeroParaString));