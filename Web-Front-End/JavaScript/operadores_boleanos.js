// Operadores boleanos

const numero = 10;

console.log(numero > 20);
console.log(numero == 10);

console.log(numero == 10);
console.log(numero == '10');
console.log(numero === '10');

console.clear();

console.log(10 != 10);
console.log(10 != '10');
console.log(10 !== '10');

console.clear();

// Conjunções lógicas

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso Dirigir?', possoDirigir);

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);