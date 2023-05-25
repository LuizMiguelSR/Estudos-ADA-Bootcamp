// Operadores Aritméticos

let primeiroNumero = 20;
let segundoNumero = 2;

const soma = primeiroNumero + segundoNumero;

console.log('Soma = ', soma);
console.log('Subtração = ', primeiroNumero - segundoNumero);
console.log('Multiplicação = ', primeiroNumero * segundoNumero);
console.log('Divisão = ', primeiroNumero / segundoNumero);
console.log('Exponenciação = ', primeiroNumero ** segundoNumero);
console.log('Resto da divisão = ', primeiroNumero % segundoNumero);

// Precedência de operadores

console.log(3 + 7 * 3);     // Resultado 24 faz a multiplicação primeiro depois a soma
console.log((3 + 7) * 3);   // Resultado 30 faz a soma primeiro e depois multiplica

// Biblioteca Math

console.log(Math.PI);
console.log(Math.sqrt(16));