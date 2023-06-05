// Função com formato tradicional
// function minhaFuncao() {}

// Função no formato arrow function
// const minhaFuncao2 = () => { }

// Espera o carregamento da página
// document.addEventListener('DOMContentLoaded', minhaFuncao)
// document.addEventListener('load', () => { })

// Escuta eventos de click 
// document.addEventListener('click', () => { console.log('click') })

// Escuta eventos do mouse. Mouseenter => passando por cima de algum elemento
// document.addEventListener('mouseenter', () => { console.log('Mouse passou por cima') })

// const inputText = document.getElementById('input-text')
// const form = document.getElementsByTagName('form')[0]

// function enviandoFormulario(e) {
//   e.preventDefault()

//   const inputName = e.target.children[0].value

//   if (!inputName) {
//     alert('Preencha todos os campos do formulario')
//   } else {
//     alert('Cadastro efetuado com sucesso')
//   }
// }

// form.addEventListener('submit', enviandoFormulario)

// inputText.onchange = () => {
//   console.log('Change')
// }
// inputText.addEventListener('change', () => console.log('Foi alterado'))

// function usuarioTeclou(evento) {
//   console.log('aqui:', evento)
// }

// // document.addEventListener('keydown', usuarioTeclou)

// const button = document.getElementById('button')

// function clicouEmAlgo(event) {
//   console.log('Voce clicou em', event.target)
// }

// window.addEventListener('click', clicouEmAlgo)




// PARTE 2

// Com fetch e .then
// function pegarUsuarios() {
//   fetch('https://jsonplaceholder.typicode.com/users').then((resposta) => resposta.json()).then(data => renderizarDados(data))
// }

// Com fetch e async await
// async function pegarUsuarios() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/photos')
//   const data = await response.json()

//   console.log(data)
// }

// Com axios e async await
async function pegarUsuarios() {
  const response = await axios.get('https://avaliacao-modulo-back-end.onrender.com/')
  const listaElemento = document.getElementById('list')
  response.data.forEach(user => {
    listaElemento.innerHTML += `
    <li style='background: green'>
      <h1>${user.nome}</h1>
      <h3>${user.username}</h3>
      <h3>${user.phone}</h3>
    </li>
    `
  })
  console.log(response.data)
}

pegarUsuarios()