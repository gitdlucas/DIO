'use strict';

const meuTexto = String('Olá Mundo!');

//console.log(meuTexto.__proto__.split === String.prototype.split);

//console.log(meuTexto.constructor === String);

function Animal() {
    this.qtdePatas = 4;
    this.latir = true;
}

const cachorro = new Animal();
console.log(cachorro.latir);

function Pessoa() {
    this.name = name;
}

const p = new Pessoa('Daniel');
console.log(p);