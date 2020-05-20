const user = {
    name: "Daniel", // estrutura com chave:valor
    lastname: "Lucas dos Santos"
};
//Verifica e confirma o tipo da variávels
console.log('\nA variável user é do tipo : ', typeof user)
    //Recupera os elemento chave do objeto
console.log('\nPropriedades do objeto user', Object.keys(user));
//Recupera os valores do objeto
console.log('\nValores do objeto user', Object.values(user));
//Monta um array com as chaves e outro com os valores
console.log('\nÉ possível representar elementos do objeto em um array de chave e outro de valor:', '\n', Object.entries(user))

Object.assign(user, { fullname: " Daniel Lucas dos Santos" });
console.log("\nO objeto mergeado com a propriedade fullname, fica assim : \n", user);

//Aplicando o conceito de imutabilidade - cria-se novo array informando "{}"
console.log("\nNovo objeto observado o conceito de imutabilidade e com a propriedade age : \n", Object.assign({}, user, { age: 45 }));

//Congela objeto para evitar alterações "Objetc.freeze" (impossibilita, criar, remover e alterar propriedades do objeto)

const novoObj = { cor: "branco", altura: 2 };
Object.freeze(novoObj);

delete novoObj.altura;
console.log(novoObj);

//Objet.seal (permite somente alterar propriedades, mas não criar e tamopouco remover.)

const pet = { name: "salsicha" };
Object.seal(pet);
console.log(pet);

//Incluir nova propriedade (sem êxito)
pet.age = 5
console.log(pet);

//remover propriedade(sem exito).
delete pet.name
console.log(pet);

//Alterar valor da propriedade name com êxito!
pet.name = "Zeca";
console.log(pet);