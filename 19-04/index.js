/*
  04 - Crie um cadastro de pessoas onde o usuário informe o nome,  idade e se está trabalhando ou não, se a pessoa estiver trabalhando
  pergunte para ele o salário que está ganhando. Para cada pessoa
  cadastrada, pergunte ao usuário se ele deseja continuar
  cadastrando ou não. No final, mostre as pessoas que estão
  desempregadas, as pessoas que estão empregadas separadas
  pelas que ganham mais que 2500 e menos que 2500.

  Exemplo de resultado:
  Pessoas desempregadas:
  Nome: Alessandro, Idade: 28
  Nome: Alessandro, Idade: 28

  Pessoas empregadas com salários menores que 2500:
  Nome: Alessandro, Idade: 28, Salário: 1500
  Nome: Alessandro, Idade: 28, Salário: 2400

  Pessoas empregadas com salários maiores que 2500:
  Nome: Alessandro, Idade: 28, Salário: 2700
  Nome: Alessandro, Idade: 28, Salário: 3000
*/

let pessoas = [];
let condicao = true;
let desempregadas = [];
let salarioMaior = [];
let salarioMenor = []
do {
  let pessoa = {};
  pessoa.nome = prompt('Qual seu nome?');
  pessoa.idade = Number(prompt('Qual sua idade?'));
  pessoa.trabalhando = confirm('Está trabalhando?');

  if (pessoa.trabalhando) {
    pessoa.salario = Number(prompt('Qual o seu salário?'));

    if (pessoa.salario >= 2500) {
      salarioMaior.push(pessoa)
    } else {
      salarioMenor.push(pessoa)
    }
  } else {
    desempregadas.push(pessoa)
  }
  pessoas.push(pessoa);
  condicao = confirm('Deseja continuar cadastrando?');
} while (condicao)

// for (let elemento of pessoas) {
//   if (elemento.trabalhando) {
//     if (elemento.salario >= 2500) {
//       salarioMaior.push(elemento)
//     } else {
//       salarioMenor.push(elemento)
//     }
//   } else {
//     desempregadas.push(elemento)
//   }
// }

console.log('Pessoas desempregadas:')
for (let pessoa of desempregadas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
}

console.log('Pessoas empregadas com salários menores que 2500:')
for (let pessoa of salarioMenor) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}

console.log('Pessoas empregadas com salários maiores que 2500:')
for (let pessoa of salarioMaior) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}
