const api = axios.create({
  baseURL: 'https://api.disneyapi.dev'
});

document.addEventListener('DOMContentLoaded', async () => {
  const personagemId = localStorage.getItem('personagemId')
  console.log({ personagemId })

  const dadosRetornados = await pegarDadosPersonagem(personagemId)

  montarCardPersonagem(dadosRetornados)
})

function montarCardPersonagem(personagem) {
  // AQUI MONTAMOS O CARD DO PERSONAGEM ESPECÍFICO
}

async function pegarDadosPersonagem(personagemId) {
  try {
    const resposta = await api.get(`/character/${personagemId}`);

    const personagem = resposta.data.data

    return personagem

  } catch (erro) {
    console.log(erro) // debug (erros de requisicao e erros de sintaxe - 400, 401, 500 ...
    alert('Erro na busca de personagens.')
    // aqui é momento de mostrar uma mensagem se der erro na requisicao
  }
}