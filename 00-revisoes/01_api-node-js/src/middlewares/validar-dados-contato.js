export function validarDadosContato(request, response, next) {
  const { nome, telefone, email } = request.body

  if (!nome || !telefone || !email) {
    return response.status(400).json({ message: 'Dados inválidos. É preciso informar nome, telefone e email para cadastrar um novo contato.' });
  }

  if (!email.includes('@') || !email.includes('.com')) {
    return response.status(400).json({ message: 'Dados inválidos. É preciso informar um email válido.' });
  }

  return next()
}