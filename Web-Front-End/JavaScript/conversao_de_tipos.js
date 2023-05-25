// Conversão ou Coerção de tipos

// Conversão explicita
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('12315464'));
console.log(parseFloat('12315464.234'));
console.log(parseInt('12315464.234'));
console.log(Boolean(0));

console.clear();

// Conversão implicita
console.log(10 + '1');
console.log(10 - '1');
console.log(10 * '3');
console.log(10 - 'x');