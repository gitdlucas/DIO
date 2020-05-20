global.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no contexto de Execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName);