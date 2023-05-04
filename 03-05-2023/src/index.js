import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json(carros)
})

const carros = [
  {
    id: 60,
    ano: 2015,
    modelo: 'civic',
    cor: 'cinza'
  },
  {
    id: 50,
    ano: 2000,
    modelo: 'civic',
    cor: 'verde'
  },
  {
    id: 40,
    ano: 2005,
    modelo: 'corolla',
    cor: 'verde'
  }
]

// Path Params
app.get('/listar-carro/:id', (request, response) => {
  const idInformado = Number(request.params.id)
  const carroEncontrado = carros.find(carro => carro.id === idInformado)

  if (carroEncontrado) {
    return response.json(carroEncontrado)
  } else {
    return response.json({ error: 'Nenhum carro foi encontrado' })
  }
})

// Query Params
// http://localhost:8080/listar-carro?filtra=preco&order=asc
app.get('/listar-carro', (request, response) => {
  console.log('chegou aqui')
  const query = request.query.filtrar
  const cor = request.query.cor

  if (query === 'ano') {
    carros.sort((a, b) => {
      if (a.ano > b.ano) return 1
      if (a.ano < b.ano) return -1

      return 0
    })


    response.status(200).json(carros)
  } else if (query === 'cor') {
    const carroEncontrado = carros.filter(carro => carro.cor === cor)
    response.status(201).json(carroEncontrado)
  }
})

app.post('/criar-carro', (request, response) => {
  const dadosCarro = request.body
  carros.push(dadosCarro)
  return response.status(201).json('Veiculo criado com sucesso')
})

app.put('/editar-carro/:id', (request, response) => {
  const id = Number(request.params.id)
  const indiceVeiculo = carros.findIndex(carro => carro.id === id)
  const novaCor = request.body.cor

  if (indiceVeiculo) {
    carros[indiceVeiculo].cor = novaCor

    return response.status(203).json(carros)
  } else {
    return response.status(404).json({ error: 'Veiculo nao encontrado' })
  }
})

app.delete('/deletar-carro/:id', (request, response) => {
  console.log(request.params)
  const id = Number(request.params.id)
  const indiceVeiculo = carros.findIndex(carro => carro.id === id)

  if (indiceVeiculo) {
    carros.splice(indiceVeiculo, 1)

    return response.status(203).json(carros)
  } else {
    return response.status(404).json({ error: 'Veiculo nao encontrado' })
  }
})

app.listen(8080, () => console.log('Servidor iniciado 🚀'))