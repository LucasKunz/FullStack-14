import jwt from 'jsonwebtoken'
import 'dotenv/config';

export function validaUsuarioAutenticado(request, response, next) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return response.status(401).json({
      sucesso: false,
      dados: null,
      mensagem: 'Você precisa estar autentciado'
    })
  }

  const token = authorization.split(' ')[1]

  if (!token) {
    return response.status(401).json({
      sucesso: false,
      dados: null,
      mensagem: 'Você precisa estar autenticado. Informe o token no cabeçalho da requisição.',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
    if (error) return response.status(400).json(error)

    request.userId = decode.userId

    if (decode.admin) {
      request.admin = true
    }

    return next()
  })
}