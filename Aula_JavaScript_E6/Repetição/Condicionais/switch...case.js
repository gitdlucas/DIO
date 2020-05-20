const fruta = "goiaba";

switch (fruta) {
    case "banana":
        console.log(`A ${fruta} custa R$5,00 o kilo`);
        break;
    case "mamão":
    case "laranja":
    case "maçã":
        console.log(`a ${fruta} custa R$4,00 o kilo`)
    default:
        console.log("Produto inexistente no estoque!")
}