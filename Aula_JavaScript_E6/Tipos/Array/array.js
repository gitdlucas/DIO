const users = ['Luciana', 'Bernardo', 'Daniel'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [{
        name: 'Daniel Lucas dos Santos',
        age: 45,
        gender: gender.MAN
    },
    {
        name: 'Luciana Zandonai',
        age: 49,
        gender: gender.WOMAN
    },
    {
        name: 'Bernardo Zandonai',
        age: 14,
        gender: gender.MAN
    }
]

// -----------------  O que é possível fazer ?
// Retornar a quantidade de itens de um array
console.log('Itens:', persons.length);

// Verificar se é um array
console.log('A variável persons é do tipo array: ', Array.isArray(persons));

// Iterar os itens do Array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// FILTER - MAP - REDUCE

//Pesquisar em um Array (Filter)
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova linha apenas com homens deste array:', mens);

// Retorna um novo (MAP)
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
})

console.log("Número de pessoas com a adição do course: ", personsWithCourse);

// Transformar o Array em um outro tipo (Reduce)
const TotalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma da Idade das pessoas:', TotalAge);

// Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0) // Buscar as pessoas(persons), cuja idade (age), dividida por 2, o Mod seja zero
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);
console.log('\nSoma de todas as idades das pessoas que possuem idade par: ', totalEvenAges);