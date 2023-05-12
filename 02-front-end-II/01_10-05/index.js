// const elementById = window.document.getElementById('title')

// // if (elementoTitle) {
// //aqui faz alguma coisa
// // }

// const elementByClassName = window.document.getElementsByClassName('paragrafo')

// const elementByTagName = window.document.getElementsByTagName('p')

// // Array.from(elementDescription).forEach(item => {
// //   item.style.color = '#ff0'
// // })

// // elementDescription[1].style.color = '#0ff'

// const elementByQuerySelector = window.document.querySelectorAll('.bloco > h2')

// elementByQuerySelector.forEach(item => {
//   if (item.innerText === 'H2 FORA 2') {
//     // item.classList.toggle('h2')
//     // Apagar elemento
//     // item.remove()
//     // Pegar valor de atributo

//     item.setAttribute('style', 'color: #ff0;')
//     const style = item.getAttribute('style')

//     console.log(style)
//   }
// })

// // console.log(elementByQuerySelector)


// {/* <a data-testid="ta-header-category-title" href="/c/sapatos">Sapatos</a> */ }
// // Forma de pegar data-atributo
// // const menus = document.querySelectorAll('[data-testid="ta-header-category-title"]')

// Atividade prática - Manipulação do DOM 1

// 01 - Crie uma página HTML que tenha um botão com o texto CLIQUE AQUI PARA MUDAR O TEXTO e logo abaixo do botão um parágrafo que tenha a seguinte frase AQUI VAI APARECER ALGUMA COISA...
// Ao clicar no botão deve ser chamado o prompt para o usuário digitar o nome dele, assim que o usuário digitar o nome dele o texto do parágrafo deve ser alterado para "E aí NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site dinâmico."

// const click = document.getElementById('botao')

// const frase = document.getElementById('frase')

// Outra forma de fazer
// click.addEventListener('click', () => {
// })

// click.onclick = () => {
//   const novoValor = prompt('Digite seu nome: ')

//   if (novoValor) {
//     frase.innerText = `E aí, ${novoValor}! Você está deixando o seu site dinâmico. `
//   } else {
//     alert('é necessário preencher o campo solicitado. ')
//   }
// }

// 02 - Crie uma página que tenha o título "Contador de Cliques". Na página deve ter 2 botões, um deles deve estar escrito INCREMENTAR e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos  botões deve ter um parágrafo contendo a seguinte frase "O contador está com 0 cliques". 
// Conforme o usuário vai clicando no botão Incrementar deve ser incrementado uma variável no javascript e ir atualizando a página conforme o número de cliques.

// Ao clicar no botão Zerar contador o parágrafo deve sumir da tela. Ao clicar no botão de Incrementar novamente o parágrafo deve aparecer com a mensagem "O contador está com 1 cliques" e ir atualizando conforme o usuário for clicando para incrementar.

// const cresce = document.getElementById('somando')
// const tira = document.getElementById('zerando')

// const paragrafo = document.getElementById('paragrafo')

// let contador = 0

// cresce.onclick = () => {
//   contador++

//   if (contador === 1) {
//     paragrafo.innerText = `O contador está com ${contador} clique`
//   } else {
//     paragrafo.innerText = `O contador está com ${contador} cliques`
//   }

//   // IF Ternario
//   // paragrafo.innerText = `O contador está com ${contador} ${contador === 1 ? 'clique' : 'cliques'}`

// }
// tira.onclick = () => {
//   contador = 0

//   paragrafo.innerText = ''
// }
