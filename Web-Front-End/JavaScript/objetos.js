// Objetos

// Como criar um objeto no JavaScript

let pessoa = {
    nome: 'Luiz', 
    idade: 33
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa.idade);

// Como adicionar um par chave-valor?

pessoa.altura = 1.85;

console.log(pessoa);

// Como remover um par chave-valor?

delete pessoa.altura;

console.log(pessoa);
console.clear();

// Como percorrer?

for (chave in pessoa) {
    console.log(chave);
}