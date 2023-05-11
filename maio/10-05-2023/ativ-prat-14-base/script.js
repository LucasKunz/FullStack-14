// 01 - Capture, armazene e manipule todos os elementos de classe "card". Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.

const cards = document.querySelectorAll('.card')
const tituloCard = document.querySelectorAll('.titulo-card')
const descriptionCard = document.querySelectorAll('.descricao-card')
const editButton = document.querySelectorAll('.botao-editar')
const botaoApagar = document.querySelectorAll('.botao-apagar')

cards.forEach(card => {
  card.style.backgroundColor = '#e16e0e'
})

// 02 - Capture, armazene e manipule todos os elementos de classe "titulo-card". Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.
// 03 - Modifique o texto dos títulos nos cards para "Meu card".
//#403d52

tituloCard.forEach(item => {
  item.style.color = '#403d52'
  item.innerText = 'Meu card'
})

// 4 - Capture, armazene e manipule todos os elementos de classe "descricao-card". Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.

// 5 - Modifique o texto das descrições nos cards para "Descrição modificada pelo JavaScript".

descriptionCard.forEach((item) => {
  item.style.color = 'white'
  item.style.padding = '40px 0'
  item.innerText = 'Descrição Modificada pelo Javascript'
})

// 6 - Capture, armazene e manipule todos os elementos de classe "botao-editar". Modifique o estilo desses elementos para que fique semelhante a imagem.

editButton.forEach((item) => {
  // item.style = 'padding: 20px; background-color: green;'
  item.classList.add('button', 'green')
  item.onclick = editarCard
})

function editarCard() {
  alert(`Clicou em editar`)
}

// 7 - Capture, armazene e manipule todos os elementos de classe "botao-apagar". Modifique o estilo desses elementos para que fique semelhante a imagem.


// 8 - Adicione o atributo 'onclick' nos elementos de classe “botão-editar”. Ao clicar nesses elementos, deve chamar a função 'editarCard()'. Essa função deve mostrar um alerta com a mensagem "Clicou em Editar!". 

// 9 - Adicione o atributo 'onclick' nos elementos de classe “botão-apagar”. Ao clicar nesses elementos deve chamar a função 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem certeza da exclusão do card. Se o usuário confirmar a exclusão deve mostrar um alerta com a mensagem "Confirmado!", se não deve mostrar a mensagem "Cancelou!".

botaoApagar.forEach(item => {
  item.classList.add('button', 'red')
  item.onclick = apagarCard
})

function apagarCard() {
  const butao = confirm(`Você tem certeza que deseja excluir o card?`)

  if (butao) {
    alert('Confirmado!')
  } else {
    alert('Cancelou!')
  }
}