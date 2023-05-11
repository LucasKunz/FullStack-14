// Subindo servidor sem express

// const http = require('node:http')

// const server = http.createServer((request, response) => {
//   if (request.method === 'GET') {
//     response.writeHead(200, { 'Content-Type': 'text/html' })
//     response.end('<h1>Hello World</br>')
//   }
// })

// server.listen(3000, () => console.log("Servidor iniciado"))

// Subindo servidor com express

import express from 'express'

const carros = [
  {
    id: 1,
    ano: 2015,
    modelo: 'civic',
    cor: 'cinza'
  },
  {
    id: 2,
    ano: 2000,
    modelo: 'civic',
    cor: 'verde'
  },
  {
    id: 3,
    ano: 2005,
    modelo: 'corolla',
    cor: 'verde'
  }
]

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json(carros)
})

// Path Params - Listar algo específico
// Exemplo URL: http://localhost:8080/listar-carro/1
app.get('/listar-carro/:id', (request, response) => {
  const id = Number(request.params.id)
  const carroEncontrado = carros.find(carro => carro.id === id)

  if (carroEncontrado) {
    return response.json(carroEncontrado)
  } else {
    return response.json({ error: 'Nenhum carro foi encontrado' })
  }
})

// Query Params - Listagem por filtro/ordenação
// Exemplo URL: http://localhost:8080/listar-carro?filtro=preco
app.get('/listar-carro', (request, response) => {
  const query = request.query.filtro
  const cor = request.query.cor

  switch (query) {
    case 'ano':
      carros.sort((a, b) => {
        if (a.ano > b.ano) return 1
        if (a.ano < b.ano) return -1

        return 0
      })

      return response.status(200).json(carros)
    case 'cor':
      const carroEncontrado = carros.filter(carro => carro.cor === cor)
      return response.status(201).json(carroEncontrado)
  }

  return response.status(404).json({ error: 'Filtro não encontrado' })
})

// Criar algum item
app.post('/criar-carro', (request, response) => {
  const dadosCarro = request.body
  carros.push(dadosCarro)
  return response.status(201).json('Veiculo criado com sucesso')
})

// Atualizar algum item, passando o ID específico
app.put('/editar-carro/:id', (request, response) => {
  const id = Number(request.params.id)
  const indiceVeiculo = carros.findIndex(carro => carro.id === id)
  const novaCor = request.body.cor

  if (indiceVeiculo >= 0) {
    carros[indiceVeiculo].cor = novaCor

    return response.status(203).json(carros)
  } else {
    return response.status(404).json({ error: 'Veiculo nao encontrado' })
  }
})

// Deletar algum item
app.delete('/deletar-carro/:id', (request, response) => {
  const id = Number(request.params.id)
  const indiceVeiculo = carros.findIndex(carro => carro.id === id)

  if (indiceVeiculo >= 0) {
    carros.splice(indiceVeiculo, 1)

    return response.status(203).json(carros)
  } else {
    return response.status(404).json({ error: 'Veiculo nao encontrado' })
  }
})

app.listen(8080, () => console.log('Servidor iniciado 🚀'))