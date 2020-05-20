/*

                            CONCEITOS
 ---------------------------------------------------------------------------

 # Linguagem Interpretada
        O código é executado "de cima para baixo" e não necessita ser trans-
 formado em algo diferente antes de ser executado.

 # Linguagem de tipagem fraca e dinâmica

 ---------------------------------------------------------------------------------------
                                - TYPESCRIPT - 
TypeScript é um superset da linguagem JavaScript
Vide https://www.typescriptlang.org

---------------------------------------------------------------------------------------
                    - FUNÇÃO DE PRIMEIRA CLASSE OU ORDEM MAIOR -

Função de primeira classe significa uma função que:
    * Pode ser atribuída à uma variavável;
        const logFnResult = logFn;

    * Pode ser atribuída à uma estrutura de dados (Object ou  Array);
        Object = {
            logFn : logFn
        }

        Array = [logFn]
    * Pode ser passada por argumentos;
        logFnResult(getName);

    * Retornadas por outras funções.
        function logFn(fn) {
            console.log(fn());
        }

---------------------------------------------------------------------------------------
                           - CLOSURE ou Escopo Léxico -
       É a capacidade de uma função "lembrar" do ambiente onde ela foi criada.

       No JavaScript há 3 tipos de escopo:
       Escopo Global
              // Escopo Global

       Escopo de Função
              function teste() {
                     //Escopo de função
              }
        
       Escopo de Bloco
              {
                     //Escopo de bloco
              }

       

        


*/