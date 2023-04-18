// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos inteiros já preenchido e
// imprima todos os valores pares.


// let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (const elemento of elementos) {
//   if (elemento % 2 === 0) {
//     document.write(`${elemento}<br>`)
//   }
// }

// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos inteiros e no final mostre a soma de todos os elementos.

// let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let soma = 0

// for (let i = 0; i < elementos.length; i++) {
//   soma += elementos[i]
// }

// document.write(soma);

// 3. Desenvolva um algoritmo que preenche um vetor com os 4 primeiros números perfeitos.

// const perfectNumber = []

// for (let i = 1; perfectNumber.length < 2; i++) {
//   let soma = 0

//   for (let n = 1; n < i; n++) {
//     if (i % n === 0) {
//       soma += n
//     }
//   }

//   if (i === soma) {
//     perfectNumber.push(i)
//   }
// }
// document.write(perfectNumber)

// const perfectNumber = []
// let number = 2
// let divisorSum = 0

// while (perfectNumber.length < 4) {
//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       divisorSum += i
//     }
//   }

//   if (divisorSum === number) {
//     perfectNumber.push(number)
//   }

//   divisorSum = 0
//   number++
// }

// document.write(perfectNumber)


// 4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que retorne a união dos dois em um novo vetor.


// const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const vetor2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// const vetoresUnidos = [];

// for (const vetor of vetor1) {
//   vetoresUnidos.push(vetor);
// }

// for (const vetor of vetor2) {
//   vetoresUnidos.push(vetor);
// }

// document.write(`${vetoresUnidos}`)


// function uniaoVetores(vetor1, vetor2) {
//   vetoresUnidos = [];
//   for (const vetor of vetor1) {
//     vetoresUnidos.push(vetor);
//   }
//   for (const vetor of vetor2) {
//     vetoresUnidos.push(vetor);
//   }

//   return vetoresUnidos
// }

// const uniao = uniaoVetores(vetor1, vetor2)

// const vetor1 = []
// const vetor2 = []
// const vetorX = []
// for (let x = 0; x < 3; x++) {
//   vetor1.push(Number(prompt('digite um valor inteiro')))
// }

// for (let x = 0; x < 3; x++) {
//   vetor2.push(Number(prompt('digite um valor inteiro')))
// }

// for (let elemento of vetor1) {
//   vetorX.push(elemento)
// }

// for (let elemento of vetor2) {
//   vetorX.push(elemento)
// }

// console.log(vetorX)

// 5. Crie uma função que recebe um vetor de inteiros e um número inteiro e retorne verdadeiro se o número faz parte do vetor ou falso se não faz parte.

// const array = []

// for (let x = 0; x < 3; x++) {
//   array.push(Number(prompt('digite um valor inteiro')))
// }

// let number = Number(prompt('digite um valor inteiro para verificar se existe no array'))
// let msg = false

// for (const num of array) {
//   if (num === number) {
//     msg = true
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === number) {
//     msg = true
//   }
// }

// console.log(msg)

// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

// const nomes = [];
// const nomesReverse = []

// for (let i = 1; i <= 5; i++) {
//   const nome = prompt(`Digite o nome ${i}:`);
//   nomes.push(nome);
// }

// for (const nome of nomes) {
//   nomesReverse.unshift(nome)
// }

// console.log("Nomes digitados:");
// console.log(nomes);

// console.log("Nomes em ordem inversa:");
// console.log(nomesReverse);


