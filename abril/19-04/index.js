// /*
//   Atividade Prática 09 - Questão 04 - Crie um cadastro de pessoas onde o usuário informe o nome,  idade e se está trabalhando ou não, se a pessoa estiver trabalhando
//   pergunte para ele o salário que está ganhando. Para cada pessoa
//   cadastrada, pergunte ao usuário se ele deseja continuar
//   cadastrando ou não. No final, mostre as pessoas que estão
//   desempregadas, as pessoas que estão empregadas separadas
//   pelas que ganham mais que 2500 e menos que 2500.

//   Exemplo de resultado:
//   Pessoas desempregadas:
//   Nome: Alessandro, Idade: 28
//   Nome: Alessandro, Idade: 28

//   Pessoas empregadas com salários menores que 2500:
//   Nome: Alessandro, Idade: 28, Salário: 1500
//   Nome: Alessandro, Idade: 28, Salário: 2400

//   Pessoas empregadas com salários maiores que 2500:
//   Nome: Alessandro, Idade: 28, Salário: 2700
//   Nome: Alessandro, Idade: 28, Salário: 3000
// */

// let pessoas = [];
// let condicao = true;
// let desempregadas = [];
// let salarioMaior = [];
// let salarioMenor = []
// do {
//   let pessoa = {};
//   pessoa.nome = prompt('Qual seu nome?');
//   pessoa.idade = Number(prompt('Qual sua idade?'));
//   pessoa.trabalhando = confirm('Está trabalhando?');

//   if (pessoa.trabalhando) {
//     pessoa.salario = Number(prompt('Qual o seu salário?'));

//     if (pessoa.salario >= 2500) {
//       salarioMaior.push(pessoa)
//     } else {
//       salarioMenor.push(pessoa)
//     }
//   } else {
//     desempregadas.push(pessoa)
//   }
//   pessoas.push(pessoa);

//   condicao = confirm('Deseja continuar cadastrando?');
// } while (condicao)

// console.log('Pessoas desempregadas:')
// for (let pessoa of desempregadas) {
//   console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
// }

// console.log('Pessoas empregadas com salários menores que 2500:')
// for (let pessoa of salarioMenor) {
//   console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
// }

// console.log('Pessoas empregadas com salários maiores que 2500:')
// for (let pessoa of salarioMaior) {
//   console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
// }

// // 1. Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação e número de páginas.

// // const livro = {
// //   titulo: 'livro 1',
// //   autor: 'desconhecido',
// //   anoPublicacao: 2010,
// //   numeroPaginas: 200
// // }

// // 2. Crie um array de objetos de livros com base no modelo criado no exercício anterior.

// // const livros = [
// //   {
// //     titulo: 'livro 1',
// //     autor: 'desconhecido',
// //     anoPublicacao: 2010,
// //     numeroPaginas: 200
// //   },
// //   {
// //     titulo: 'livro 2',
// //     autor: 'desconhecido',
// //     anoPublicacao: 2000,
// //     numeroPaginas: 250
// //   }
// // ]

// // 3. Escreva um algoritimo que receba um array de objetos de livros e retorne o título do livro mais antigo.

// let livros = [
//   { titulo: 'O Pequeno Principe', anoPublicao: 1943 },
//   { titulo: 'Hamlet', anoPublicao: 1623 },
//   { titulo: 'Harry Potter e a Pedra Filosofal', anoPublicao: 1998 },
//   { titulo: 'desconhecido 1', anoPublicao: 2010 },
//   { titulo: 'desconhecido 2', anoPublicao: 2021 },

// ];

// let livroMaisAntigo = livros[0];

// for (i = 0; i < livros.length; i++) {
//   if (livros[i].anoPublicao < livroMaisAntigo.anoPublicao) {
//     livroMaisAntigo = livros[i];
//   }
// }

// // 4. Escreva um algoritimo que receba um array de objetos de livros e retorne uma nova matriz contendo apenas os livros publicados no século 21.

// const livrosSec21 = []

// for (let i in livros) {
//   if (livros[i].anoPublicao >= 2000) {
//     livrosSec21.push(livros[i])
//   }
// }

// console.log('Livros publicados no século 21:')
// for (let livro of livrosSec21) {
//   console.log(`Título: ${livro.titulo}, Publicação: ${livro.anoPublicao}`)
// }

// // 5. Escreva um algoritimo que receba um array de objetos de livros e retorne uma nova matriz contendo apenas os títulos dos livros.

// let newBook2 = []

// for (let i = 0; i < livros.length; i++) {
//   newBook2.push({ title: livros[i].titulo })
// }

// console.log(newBook2)
const cart = {
  items: [],
  payment: {},
  total: 0
}
let continuar = true

function renderShoppingList(product) {
  console.log(`Produto: ${product.name} - Quantidade: ${product.quantity} - Preço total: ${product.price}`)
}

function getValueParcelas(parcelas) {
  if (parcelas <= 5) {
    descount = cart.total * 1.05
  } else if (parcelas <= 10) {
    cart.total = cart.total * 1.10
  } else {
    cart.total = cart.total * 1.15
  }

  return cart.total / parcelas
}

function getDescountValue(paymentSelected) {
  let descount = 0
  if (paymentSelected == 'debito') {
    descount = cart.total * 0.95
  } else {
    descount = cart.total * 0.9
  }

  return descount
}

function paymentFormat() {
  const paymentSelected = prompt('Digite a forma de pagamento desejada (CREDITO, DÉBITO, PIX, DINHEIRO)')

  switch (paymentSelected) {
    case 'CREDITO':
      const parcelas = Number(prompt('Informe o número de parcelas'))
      const valueParcelas = getValueParcelas(parcelas)
      cart.payment = {
        method: paymentSelected,
        parcelas: parcelas,
        valueParcelas: valueParcelas,
        descount: 0
      }
      break
    case 'DEBITO': case 'PIX': case 'DINHEIRO':
      const descount = getDescountValue(paymentSelected)
      cart.payment = {
        method: paymentSelected,
        parcelas: 0,
        valueParcelas: 0,
        descount: descount
      }
      break
  }

  console.log(cart)
}

function calculateTotal() {
  let total = 0
  for (let item of cart.items) {
    total += item.unityPrice * item.quantity
  }

  cart.total = total

  paymentFormat()
}

function renderProductItem(product) {
  return `<li>${product.name} - Quantidade: ${product.quantity} - Total: ${product.price}</li>`

}

function addProduct() {
  const product = {}
  product.name = prompt('Digite o nome do produto?')
  product.quantity = Number(prompt('Digite a quantidade'))
  product.unityPrice = Number(prompt('Digite o preço'))
  product.price = product.quantity * product.unityPrice
  cart.items.push(product)
  if (cart.items.length > 1) {
    document.write(`
      ${renderProductItem(cart.items[cart.items.length - 1])}

  `)
  } else (
    document.write(`
      <div>
        <button onclick='addProduct()'>Adicionar produto</button>
        <button onclick='calculateTotal()'>Finalizar pedido</button>
      </div>
      <h3>Pedido</h3>
        ${renderProductItem(product)}
  
    `)

  )

  // renderShoppingList(product)
}
