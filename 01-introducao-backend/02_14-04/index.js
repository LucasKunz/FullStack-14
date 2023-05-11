// Aula Pratica 03 - Questão 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16..

// Definição de número primo
// # Ser maior que 1;
// # Ser divisível apenas por 1 e por ele mesmo.

let quantityPrimeNumbers = 0

for (let i = 100; i >= 1; i--) {
  let isPrimeNumber = false

  if (i <= 1) {
    console.log(i)
    continue
  }

  for (let n = 1; n < i; n++) {
    if (n === 1) continue

    if (i % n === 0) {
      isPrimeNumber = false
      break
    }

    isPrimeNumber = true
  }
  if (i === 2) {
    isPrimeNumber = true
  }

  if (isPrimeNumber) {
    quantityPrimeNumbers++
    console.log(`[${i}]`)
  } else {
    console.log(`${i}`)
  }
}

console.log(quantityPrimeNumbers)


// Aula Pratica 06 - Questão 9. Informe um valor a uma variável e imprima no console se o número é primo.

// const number = Number(prompt('Digite um número'))

// if (number <= 1) {
//   document.write(`O número ${number} não é um número primo`)
// } else {
//   let isPrimeNumber = true
//   for (let i = 1; i < number; i++) {
//     if (i === 1) continue
//     if (number % i === 0) {
//       isPrimeNumber = false
//       break
//     }
//   }

//   if (isPrimeNumber) {
//     document.write(`O número ${number} é um número primo`)
//   } else {
//     document.write(`O número ${number} não é um número primo`)
//   }
// }

