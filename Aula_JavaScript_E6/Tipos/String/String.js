//Criar uma string 
const texto = "Testando";
console.log(texto)

// ------------------------- Funções de Strings
// Tamanho da string
const textSize = "Testando".length
console.log('\nQuantidade de caracteres : ' + textSize);

// Separando uma string
const Teste = 'Boxe'.split('x');
console.log('\nArray com as posições separadas pelo delimitador x: ', Teste);

//Busca valor na string e substitui por outro (Aceita Regex)
const Testando = 'Busca_e_Altera_Texto'.replace('_', ' ');
console.log('\nSubstitui o caracter "-" por um espaço em branco :', Testando);

//Busca o último caracter de uma string
const UltimoCaracter = 'Daniel'.slice(-1);
console.log('\nTraz a última letra da string "Daniel" : ', UltimoCaracter);

//Busca todos caracteres exceto, o último:
const TodosMenos_o_Ultimo = "Daniel".slice(0, -1);
console.log('\nTraz todos os caracteres exceto o último : ', TodosMenos_o_Ultimo);

//Busca todos caracteres exceto, o primeiro:
const TodosMenos_o_Primeiro = "Daniel".slice(1);
console.log('\nTraz todos os caracteres exceto o primeiro : ', TodosMenos_o_Primeiro);

//Retorna N caracteres apatir de uma posição:
const RetornaCaracteresApartirPosicao = "Daniel".substr(0, 2);
console.log("\nRetorna intervalo de caracteres de string à partir de uma posição : ", RetornaCaracteresApartirPosicao);