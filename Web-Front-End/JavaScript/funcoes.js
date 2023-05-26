// Funções

// Definição da Função
function saudacao() {
    console.log('Olá, seja bem vindo(a) ao curso de JavaScript!');
}

saudacao();
console.clear();

// Como enviar parâmetros para as funções
function saudacao(nome, curso='JavaScript') {
    console.log(`Olá ${nome}, seja bem vindo(a) ao curso de ${curso}!`);
}

saudacao('Luiz', 'HTML/CSS');
console.clear();

// Retornno da função
function soma(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = soma(10, 20);

console.log(resultado / 2);
console.clear();

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }

    return false
}
