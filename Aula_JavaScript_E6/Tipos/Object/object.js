// Variável "user" com proprieda name, cujo valor é Daniel
let user = {
    name: 'Daniel'
};
console.log("\nOriginalmente a variável 'user' tem como valor : ", user.name);

// Altera o valor de uma propriedade
user.name = 'Luciana';
console.log("\nMas pode ter o valor facilmente alterada desta forma : ", user.name);
user['name'] = 'Bernardo';
console.log("\nOu desta forma : ", user.name);

// ou  ainda assim:
const propriedade = 'name';
user[propriedade] = 'Luiza Braba';
console.log("\nTambém pode ser alterada desta forma : ", user.name);

// Criando uma propridade adicional ao objeto
user.lastname = 'Periquita!'
console.log("\nCriando uma propridade adicional ao objeto com o 'lastname' : ", user);

//Removendo (deletando) uma propriedade
delete user.name;
console.log("\nRemovendo uma propriedade, no caso removi 'name': ", user);