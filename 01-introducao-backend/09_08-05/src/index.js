import express from 'express'
const crypto = require('node:crypto');

const app = express()

app.use(express.json())

app.listen(8080, () => {
  console.log('Servidor iniciado 🚀')
})

app.post('/cadastro', (request, response) => {
  const dados = request.body

  const usuario = listaUsuarios.find((user) => user.email === data.email)

  if (usuario) {
    return response.status(400).json({
      sucess: false,
      message: 'Nome de usuário já existe. Cadastre um novo usuário',
      data: {}
    })
  }

  if (!dados.nome) {
    return response.status(400).json("O campo nome é obrigatório")
  }

  if (!dados.email) {
    return response.status(400).json("O campo e-mail é obrigatório")
  }

  if (!dados.senha) {
    return response.status(400).json("O campo senha é obrigatório")
  }

  const novoUsuario = {
    id: new Date().getTime(),
    nome: dados.nome,
    email: dados.email,
    senha: dados.senha,
    logado: false
  }

  listaUsuarios.push(novoUsuario)

  return response.status(201).json({
    sucess: true,
    message: 'Usuario criado com sucesso',
    data: novoUsuario
  })
})

app.post('/login', (request, response) => {
  const data = request.body

  const usuario = listaUsuarios.find((user) => user.email === data.email)

  const senha = listaUsuarios.find((user) => user.senha === data.senha)

  if (!usuario || !senha) {
    return response.status(400).json({
      sucess: false,
      message: 'E-mail ou senha estão incorretos',
      data: {}
    })
  }

  listaUsuarios.forEach((usuario) => usuario.logado = false)

  const user = listaUsuarios.find((user) => user.email === data.email)

  user.logado = true

  return response.json('Login realizado com sucesso')
})

const listaRecados = []

app.post('/recados', (request, response) => {
  const dados = request.body

  // const user = listaUsuarios.find(user => user.logado === true)1`

  // if (!user) {
  //   return response.status(400).json({
  //     sucess: false,
  //     messsage: 'Necessário fazer login para criar um post',
  //     data: {}
  //   })
  // }

  const novoRecado = {
    id: crypto.randomUUID(),
    titulo: dados.titulo,
    descricao: dados.descricao,
    // autor: user
  }

  listaRecados.push(novoRecado)

  return response.json({
    sucess: true,
    message: 'Recado criado com sucesso',
    data: novoRecado
  })
})

app.get('/listar-recados/:id', (request, response) => {
  const params = request.params

  const user = listaUsuarios.find(user => user.logado === true)

  if (!user) {
    return response.status(400).json({
      sucess: false,
      messsage: 'Necessário fazer login para listar seus recados',
      data: {}
    })
  }

  const recado = listaRecados.find(recado => recado.id === params.id)

  if (!recado < 0) {
    return response.status(400).json('Recado não encontrado')
  }

  const recadoListado = {
    id: recado.id,
    titulo: recado.titulo,
    descricao: recado.descricao,
    autor: user
  }

  return response.json({
    sucess: true,
    message: 'Recado listado com sucesso',
    data: recadoListado
  })

})

app.put('/recados/:id', (request, response) => {
  const params = request.params

  // const user = listaUsuarios.find(user => user.logado === true)

  const recadoExiste = listaRecados.findIndex(recado => recado.id == params.id)

  const recado = listaRecados.find(recado => recado.id === params.id)
  console.log(recadoExiste)
  console.log(recado)

  // if (!user) {
  //   return response.status(400).json({
  //     sucess: false,
  //     messsage: 'Necessário fazer login para atualizar um recado',
  //     data: {}
  //   })
  // }

  console.log(recadoExiste)

  if (!recado) {
    return response.status(400).json('Recado não encontrado')
  }

  console.log(recado[recadoExiste])
  console.log(request.body)

  recado[recadoExiste].titulo = request.body.titulo
  recado[recadoExiste].descricao = request.body.descricao

  listaRecados.splice(recadoExiste, 1)

  listaRecados.push(recado)

  return response.json({
    sucess: true,
    message: 'Recado atualizado com sucesso',
    data: recado
  })

})


