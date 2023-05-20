import express from 'express'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import { validarDados } from './middlewares/validar-dados'
import { validarEmailExistente } from './middlewares/validar-email-existente'
import { validaUsuarioAutenticado } from './middlewares/validar-usuario-autenticado'
import { validarDadosContato } from './middlewares/validar-dados-contato'
import 'dotenv/config';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  return response.send('API contatos')
})

export const usuarios = []

// Criar cadastro
app.post('/usuarios/cadastro', validarDados, validarEmailExistente, (request, response) => {
  // const data = request.body
  // Desestruturação
  const { email, senha } = request.body

  const user = {
    id: crypto.randomUUID(),
    email,
    senha
  }

  usuarios.push(user)

  return response.json({
    status: 200,
    message: 'Usuario criado com sucesso',
    user: user
  })
})

// Fazer login
app.post('/usuarios/login', validarDados, (request, response) => {
  const { email, senha } = request.body

  const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)

  if (!usuarioEncontrado) {
    return response.status(400).json({ message: 'E-mail ou senha estão incorretos.' });
  }

  const token = jwt.sign({ userId: usuarioEncontrado.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIREIN })

  return response.status(201).json({
    sucesso: true,
    dados: {
      email: usuarioEncontrado.email,
      token: token
    },
    mensagem: 'Login autorizado. Utilize o token gerado',
  });

})

const contatos = []

// Criar contato
app.post('/contatos/criar', validarDadosContato, validaUsuarioAutenticado, (request, response) => {
  const { nome, telefone, email } = request.body

  const usuario = usuarios.find(user => user.id === request.userId)

  const contato = {
    id: crypto.randomUUID(),
    nome,
    telefone,
    email,
    criado_por: usuario.email
  }

  contatos.push(contato)

  return response.status(201).json({
    sucesso: true,
    dados: contato,
    mensagem: 'Contato criado com sucesso',
  });
})

/*
    Todo contato deverá ter

    - ID
    - Nome
    - Telefone
    - Email
    - criadoPor

*/





app.listen(8080, () => console.log('Servidor iniciado!'))